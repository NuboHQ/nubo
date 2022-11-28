import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { last } from 'lodash';
import { format } from 'prettier';
import { createSourceFile, ScriptTarget } from 'typescript';
import { getConfig, processTypescript, resetConfig } from './typescript';

export const generate = (path: string) => {
  const file = last(path.split('/'));

  if (!file) return;

  const fileName = file.replace('.nubo', '');

  if (!fileName) return;

  try {
    const serverFileName = `${fileName}.server.tsx`;
    const clientFileName = `${fileName}.client.tsx`;
    const nuboCode = readFileSync(`./${path}`, 'utf-8');
    const nuboCodeWithServerLine =
      nuboCode.indexOf('---') === -1 ? `${nuboCode}\n---` : nuboCode;

    const jsCode = nuboCodeWithServerLine
      .split(/\r?\n/)
      .map((line) => {
        if (line.indexOf('---') === 0) {
          return '//server-line';
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

    const serverCodeWithBlocks = format(
      jsCode.replace(/'---'/, '//server-line'),
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
      if (line.indexOf('//server-line') === 0) {
        lastServerLine = lineIndex;
      }
    });

    const wrapServerCodeLinesStart = [
      `let Nubo: any = null;`,
      'export let props;',
      // ...config.propsKeys.map((key) => `let ${key};`),
      'export const getServerProps = async (nubo: any) => {',
      'Nubo = nubo;',
      'if (!Nubo) return;',
    ];
    const wrapServerCodeLinesEnd = [
      'return props;',
      '};',
      'await getServerProps(Nubo);',
      // ...config.propsKeys.map((key) => `${key} = config?.props?.${key} || {};`),
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
      .replace(/\/\/server-line/g, '')
      .replace('export const props', 'props')
      .replace(
        'const Page: FC = ()',
        `const Page: FC = ({ props: { ${config.propsKeys.join(', ')} } }: any)`,
      )
      .trimStart();

    const removeClientLinesCount = lastServerLine - lastImportLine + 1;

    const clientLines = [...serverLines];
    const clientPropsLines = [
      `import { clientConfig } from '../client/config'`,
    ];

    clientLines.splice(lastImportLine, 0, ...clientPropsLines);
    clientLines.splice(
      lastImportLine + clientPropsLines.length,
      removeClientLinesCount,
    );
    // console.log('-------');
    // console.log(clientLines);
    // console.log('-------');
    const rawClientCode = clientLines.join('\n');
    const clientCodeWithProps = rawClientCode.replace(
      'const Page: FC = ()',
      `const Page: FC = ({ props: { ${config.propsKeys.join(', ')} } }: any)`,
    );
    const clientCode = format(clientCodeWithProps, {
      semi: false,
      parser: 'babel',
    }).trim();

    // console.log('--SERVER----------');
    // console.log(serverCode);
    // console.log('--CLIENT----------');
    // console.log(clientCode);

    if (!existsSync('src/.nubo-generated')) {
      mkdirSync('src/.nubo-generated');
    }

    writeFileSync(`src/.nubo-generated/${serverFileName}`, serverCode, 'utf-8');
    writeFileSync(`src/.nubo-generated/${clientFileName}`, clientCode, 'utf-8');
    // console.log('Generated files for:', file);
    // console.log(`  src/.nubo-generated/${serverFileName}`);
    // console.log(`  src/.nubo-generated/${clientFileName}`);
    resetConfig(path);
  } catch (error) {
    console.error(`error - Unable to compile ${path}`);

    throw new Error(`Unable to compile ${path}`);
  }
};

const [file] = process.argv.slice(2);

if (file) {
  generate(file);
}
