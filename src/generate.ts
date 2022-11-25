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

  const serverCodeWithBlocks = format(
    jsCode.replace(/'---'/, '//server-block'),
    {
      semi: false,
      parser: 'babel',
    },
  );

  const serverLines = serverCodeWithBlocks.split(/\r?\n/);
  let lastImportLine = -1;
  let lastServerLine = -1;

  serverLines.forEach((line, lineIndex) => {
    if (line.indexOf('import') === 0) {
      lastImportLine = lineIndex;
    }
    if (line.indexOf('//server-block') === 0) {
      lastServerLine = lineIndex;
    }
  });

  const wrapServerCodeLinesStart = [
    'export let config;',
    ...propsKeys.map((key) => `let ${key};`),
    'export const getServerProps = async () => {',
  ];
  const wrapServerCodeLinesEnd = [
    '};',
    'await getServerProps();',
    ...propsKeys.map((key) => `${key} = config.props.${key};`),
  ];
  const formattedServerLines = [...serverLines];
  formattedServerLines.splice(
    lastImportLine + 1,
    0,
    ...wrapServerCodeLinesStart,
  );
  formattedServerLines.splice(
    lastServerLine + wrapServerCodeLinesStart.length,
    0,
    ...wrapServerCodeLinesEnd,
  );
  const formattedServerCode = formattedServerLines.join('\n');
  const serverCode = formattedServerCode
    .replace(/\/\/server-block/g, '')
    .replace('export const config', 'config')
    .trimStart();

  const removeClientLinesCount = lastServerLine - lastImportLine + 1;

  const clientLines = [...serverLines];
  const clientPropsLines = [
    `import {config} from '../config'`,
    ...propsKeys.map((key) => `const ${key} = config.props.${key};`),
  ];

  clientLines.splice(0, 1);
  clientLines.splice(lastImportLine, 0, ...clientPropsLines);
  clientLines.splice(
    lastImportLine + clientPropsLines.length,
    removeClientLinesCount,
  );
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
