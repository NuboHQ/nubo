import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { last } from 'lodash';
import { format } from 'prettier';
import { createSourceFile, ScriptTarget } from 'typescript';
import { getConfig, processTypescript, resetConfig } from './typescript';

export const generate = (path: string) => {
  const file = last(path.split('/'));

  if (!file) return;

  const fileName = file.replace('.nubo', '');
  const serverFileName = `${fileName}.server.tsx`;
  const clientFileName = `${fileName}.client.tsx`;
  const nuboCode = readFileSync(`./${path}`, 'utf-8');
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

  processTypescript(typescriptCode, path);

  const config = getConfig(path);

  resetConfig(path);

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
    ...config.propsKeys.map((key) => `let ${key};`),
    'export const getServerProps = async () => {',
  ];
  const wrapServerCodeLinesEnd = [
    'return config;',
    '};',
    'await getServerProps();',
    ...config.propsKeys.map((key) => `${key} = config.props.${key};`),
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
    ...config.propsKeys.map((key) => `const ${key} = config.props.${key};`),
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

  if (!existsSync('src/.nubo-src')) {
    mkdirSync('src/.nubo-src');
  }

  writeFileSync(`src/.nubo-src/${serverFileName}`, serverCode, 'utf-8');
  writeFileSync(`src/.nubo-src/${clientFileName}`, clientCode, 'utf-8');
  // console.log('Generated files for:', file);
  // console.log(`  src/.nubo-src/${serverFileName}`);
  // console.log(`  src/.nubo-src/${clientFileName}`);
};
