package main

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"strings"
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
	_ = os.Mkdir("out", os.ModePerm)

	data, err := os.ReadFile("examples/product.nubo")
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

	serverFile, err := os.Create("out/product.server.tsx")
	serverFile.WriteString(rawServerCode)

	// -----
	tsParserCommand := exec.Command("npm", "run", "ts-parser", "out/product.server.tsx")
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

	fmt.Println(propsExport.Props)
	// -----

	importLines := rawServerLines[0 : lastImportLine+1]
	imports := strings.Join(importLines, "\n")
	clientCodeWrapStart := "export const Page: FC = () => {"
	clientCodeWrapEnd := "}"
	clientCodeWrapped := imports + "\nimport { FC } from 'react';" + "\n\n" + clientCodeWrapStart + "\n" + rawClientCode + "\n" + clientCodeWrapEnd
	clientPropsText := "export const Page: FC = ({ props: { " + strings.Join(propsExport.Props, ", ") + " } }: any)"
	clientCode := strings.Replace(clientCodeWrapped, "export const Page: FC = ()", clientPropsText, 1)

	clientFile, err := os.Create("out/product.client.tsx")
	clientFile.WriteString(clientCode)

	exec.Command("npm", "run", "prettier")
}
