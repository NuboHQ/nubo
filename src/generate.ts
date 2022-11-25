import { readFileSync, writeFileSync } from 'fs';
import { format } from 'prettier';
import {
  createSourceFile,
  forEachChild,
  Node,
  ScriptTarget,
  SyntaxKind,
} from 'typescript';

let isConfig = false;
let isConfigProps = false;
const propsKeys: string[] = [];

const processTypescript = (node: Node) => {
  if (SyntaxKind[node.kind] === 'VariableDeclarationList') {
    if (node.getText().indexOf('const config') === 0) {
      isConfig = true;
    } else {
      isConfig = false;
    }
  }

  if (isConfig && SyntaxKind[node.kind] === 'Identifier') {
    if (isConfigProps) {
      isConfigProps = true;
      propsKeys.push(node.getText());
    }

    if (node.getText() === 'props') {
      isConfigProps = true;
    }
  }

  forEachChild(node, processTypescript);
};

(async () => {
  const nuboCode = readFileSync('./src/main.nubo', 'utf-8');
  const jsCode = nuboCode
    .split(/\r?\n/)
    .map((line) => {
      if (line.indexOf('---') === 0) {
        return '//server-block';
      }

      return line;
    })
    .join('\n');

  const typescriptCode = createSourceFile(
    'x.ts',
    jsCode,
    ScriptTarget.Latest,
    true,
  );

  processTypescript(typescriptCode);
  console.log('---');
  console.log(propsKeys);
  console.log('---');

  const serverCodeWithBlocks = format(
    jsCode.replace(/'---'/, '//server-block'),
    {
      semi: false,
      parser: 'babel',
    },
  );
  const serverCode = serverCodeWithBlocks
    .replace(/\/\/server-block/g, '')
    .trim();

  const lines = serverCodeWithBlocks.split(/\r?\n/);
  let lastImportLine = -1;
  let lastServerLine = -1;

  lines.forEach((line, lineIndex) => {
    if (line.indexOf('import') === 0) {
      lastImportLine = lineIndex;
    }
    if (line.indexOf('//server-block') === 0) {
      lastServerLine = lineIndex;
    }
  });

  const removeLinesCount = lastServerLine - lastImportLine + 1;
  const clientLines = [...lines];
  clientLines.splice(0, 1);
  clientLines.splice(lastImportLine, removeLinesCount);
  const rawclientCode = clientLines.join('\n');
  const clientCode = format(rawclientCode, {
    semi: false,
    parser: 'babel',
  }).trim();

  // console.log('--SERVER----------');
  // console.log(serverCode);
  // console.log('--CLIENT----------');
  // console.log(clientCode);

  writeFileSync('src/generated/main.server.tsx', serverCode, 'utf-8');
  writeFileSync('src/generated/main.client.tsx', clientCode, 'utf-8');
})();
