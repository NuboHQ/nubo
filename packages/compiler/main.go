package main

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"strings"
	"time"
)

type TsResult struct {
	Exports []TsExport
}

type TsExport struct {
	Name  string
	Props []string
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	start := time.Now()

	args := os.Args[1:]
	path := args[0]

	compile(path)

	fmt.Println()
	elapsed := time.Since(start)
	fmt.Printf("Duration: %.2fs", elapsed.Seconds())
}

func compile(path string) {
	pathSegments := strings.Split(path, "/")
	fileName := pathSegments[len(pathSegments)-1]
	name := strings.Replace(fileName, ".nubo", "", 1)
	serverFileName := name + ".server.tsx"
	serverFilePath := "out/" + serverFileName
	clientFileName := name + ".client.tsx"
	clientFilePath := "out/" + clientFileName

	_ = os.Mkdir("out", os.ModePerm)

	data, err := os.ReadFile(path)
	check(err)

	parts := strings.Split(string(data), "---")
	rawServerCode := strings.TrimSpace(parts[1])
	rawClientCode := strings.TrimSpace(parts[2])
	rawServerLines := strings.Split(rawServerCode, "\n")
	lastImportLine := -1

	for i := 0; i < len(rawServerLines); i++ {
		if strings.Index(rawServerLines[i], "import") == 0 {
			lastImportLine = i
		}
	}

	os.Remove(serverFilePath)
	serverFile, err := os.Create(serverFilePath)
	serverFile.WriteString(rawServerCode)

	// -----
	tsParserCommand := exec.Command("npm", "run", "ts-parser", serverFilePath)
	tsParserStdout, err := tsParserCommand.Output()

	tsRaw := string(tsParserStdout)
	tsString := strings.Split(tsRaw, "---")[1]
	var tsResult TsResult
	json.Unmarshal([]byte(tsString), &tsResult)

	var propsExport TsExport

	for i := 0; i < len(tsResult.Exports); i++ {
		if tsResult.Exports[i].Name == "props" {
			propsExport = tsResult.Exports[i]
		}
	}
	// -----

	// client
	os.Remove(clientFilePath)

	if rawClientCode != "" {
		importLines := rawServerLines[0 : lastImportLine+1]
		imports := strings.Join(importLines, "\n")
		clientCodeWrapStart := "export const Page: FC = () => {"
		clientCodeWrapEnd := "}"
		clientCodeWrapped := imports + "\nimport { FC } from 'react';" + "\n\n" + clientCodeWrapStart + "\n" + rawClientCode + "\n" + clientCodeWrapEnd
		clientPropsText := "export const Page: FC = ({ props: { " + strings.Join(propsExport.Props, ", ") + " } }: any)"
		clientCode := strings.Replace(clientCodeWrapped, "export const Page: FC = ()", clientPropsText, 1)

		clientFile, err := os.Create(clientFilePath)
		clientFile.WriteString(clientCode)

		if err == nil {
			fmt.Println(err)
		}
	}

	prettierCommand := exec.Command("npm", "run", "prettier", "out")
	prettierCommand.Output()

}
