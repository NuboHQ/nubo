package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"os/exec"
	"strings"
	"time"

	"github.com/fsnotify/fsnotify"
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
	var shouldWatch bool
	var directory string
	var file string

	flag.BoolVar(&shouldWatch, "watch", false, "Watch directory")
	flag.StringVar(&directory, "dir", "./", "Directory to watch")
	flag.StringVar(&file, "file", "", "File to compile")

	flag.Parse()

	if file != "" {

		compile(file)

		return
	}

	if shouldWatch {
		watch(directory)

		return
	}

}

func compile(file string) {
	start := time.Now()

	pathSegments := strings.Split(file, "/")
	fileName := pathSegments[len(pathSegments)-1]
	fileNameParts := strings.Split(fileName, ".")

	if fileNameParts[len(fileNameParts)-1] != "nubo" {
		return
	}

	name := strings.Replace(fileName, ".nubo", "", 1)
	serverFileName := name + ".server.tsx"
	serverFilePath := "out/" + serverFileName
	clientFileName := name + ".client.tsx"
	clientFilePath := "out/" + clientFileName

	removeCompiledFiles(file)

	_ = os.Mkdir("out", os.ModePerm)

	data, err := os.ReadFile(file)
	check(err)

	parts := strings.Split(string(data), "---")

	if len(parts) < 2 {
		return
	}

	rawServerCode := strings.TrimSpace(parts[1])
	rawClientCode := strings.TrimSpace(parts[2])
	rawServerLines := strings.Split(rawServerCode, "\n")
	lastImportLine := -1

	for i := 0; i < len(rawServerLines); i++ {
		if strings.Index(rawServerLines[i], "import") == 0 {
			lastImportLine = i
		}
	}

	importLines := rawServerLines[0 : lastImportLine+1]
	importsCode := strings.Join(importLines, "\n")

	rawServerFile, err := os.Create(serverFilePath)
	rawServerFile.WriteString(rawServerCode)

	// -----
	tsParserCommand := exec.Command("npm", "run", "swc", serverFilePath)
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

	serverCode := ""
	serverCodeExtra := "\nexport let props;"
	serverCodeExtra += "\n\nexport const getServerProps = async () => {"

	for i := 0; i < len(rawServerLines); i++ {
		serverCode += rawServerLines[i] + "\n"

		if i == lastImportLine {
			serverCode += "\n" + serverCodeExtra
		}
	}
	serverCode += "\nreturn props;"
	serverCode += "\n}"

	if strings.Index(serverCode, "export const props") != -1 {
		serverCode = strings.Replace(serverCode, "export const props", "props", 1)
	}

	serverFile, err := os.Create(serverFilePath)
	serverFile.WriteString(serverCode)

	// client
	if rawClientCode != "" {
		clientCodeWrapStart := "export const Page: FC = () => {"
		clientCodeWrapEnd := "}"
		clientCodeWrapped := importsCode + "\nimport { FC } from 'react';" + "\n\n" + clientCodeWrapStart + "\n" + rawClientCode + "\n" + clientCodeWrapEnd
		clientCode := clientCodeWrapped

		if len(propsExport.Props) > 0 {
			clientPropsText := "export const Page: FC = ({ props: { " + strings.Join(propsExport.Props, ", ") + " } }: any)"
			clientCode = strings.Replace(clientCodeWrapped, "export const Page: FC = ()", clientPropsText, 1)
		}

		clientFile, err := os.Create(clientFilePath)
		clientFile.WriteString(clientCode)

		if err != nil {
			fmt.Println(err)
		}
	}

	// prettierCommand := exec.Command("npm", "run", "prettier", "out")
	// prettierCommand.Output()

	elapsed := time.Since(start)
	fmt.Printf("[nubo:compiler] Compiled "+fileName+" - %.2fs", elapsed.Seconds())
	fmt.Println()
}

func watch(directory string) {
	fmt.Println("[nubo-compiler] Watch directory: " + directory)
	fmt.Println("[nubo-compiler] Waiting for file changes...")
	// creates a new file watcher
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		fmt.Println("ERROR", err)
	}
	defer watcher.Close()

	done := make(chan bool)

	go func() {
		for {
			select {
			// watch for events
			case event := <-watcher.Events:
				switch op := event.Op.String(); op {
				case "CREATE":
					compile(event.Name)

				case "WRITE":
					compile(event.Name)

				case "RENAME":
					removeCompiledFiles(event.Name)
				default:
				}

				// watch for errors
			case err := <-watcher.Errors:
				fmt.Println("ERROR", err)
			}
		}
	}()

	if err := watcher.Add(directory); err != nil {
		fmt.Println("ERROR", err)
	}

	<-done
}

func removeCompiledFiles(path string) {
	pathSegments := strings.Split(path, "/")
	fileName := pathSegments[len(pathSegments)-1]
	fileNameParts := strings.Split(fileName, ".")
	name := strings.Replace(fileName, ".nubo", "", 1)
	serverFileName := name + ".server.tsx"
	serverFilePath := "out/" + serverFileName
	clientFileName := name + ".client.tsx"
	clientFilePath := "out/" + clientFileName

	if fileNameParts[len(fileNameParts)-1] != "nubo" {
		return
	}

	os.Remove(serverFilePath)
	os.Remove(clientFilePath)
}
