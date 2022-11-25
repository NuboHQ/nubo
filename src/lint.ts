import { Parser as AcornParser } from 'acorn';
import {
  createSourceFile,
  forEachChild,
  Node,
  ScriptTarget,
  SyntaxKind,
} from 'typescript';

const Parser = AcornParser.extend(require('acorn-jsx')());

(async () => {
  // const nuboCode = readFileSync('./src/main.nubo', 'utf-8');
  // const jsCode = nuboCode
  //   .split(/\r?\n/)
  //   .map((line) => {
  //     if (line.indexOf('---') === 0) {
  //       return '//server-block';
  //     }

  //     return line;
  //   })
  //   .join('\n');

  const code = `
// import { FC } from 'react';

// const sleep = () => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 5000);
//   });
// };

// console.log('server start...');
// await sleep();

// const logs: Log = [];

// console.log('server ready');

export const config = { path: '/logs', props: { logs, value: 'The great value' } };
export const other = { something: 'else' };

// const Page: FC = () => {
//   return <div>App 2</div>;
// };

// export default Page;
  `;

  const sc = createSourceFile('x.ts', code, ScriptTarget.Latest, true);

  let c = false;
  let p = false;
  let indent = 0;
  function print(node: Node) {
    console.log(
      new Array(indent + 1).join(' ') + SyntaxKind[node.kind],
      node.getText(),
    );
    if (SyntaxKind[node.kind] === 'VariableDeclarationList') {
      if (node.getText().indexOf('const config') === 0) {
        c = true;
      } else {
        c = false;
      }
    }

    // if (index > 1 && SyntaxKind[node.kind] === 'ObjectLiteralExpression') {
    // }

    // if (index > 2 && SyntaxKind[node.kind] === 'PropertyAssignment') {
    //   index++;
    // }

    if (c && SyntaxKind[node.kind] === 'Identifier') {
      if (p) {
        p = true;
        console.log('>>>', node.getText());
      }

      if (node.getText() === 'props') {
        p = true;
      }
    }

    indent++;
    forEachChild(node, print);
    indent--;
  }

  print(sc);
  // console.log(
  //   JSON.stringify(
  //     Parser.parse(code, { ecmaVersion: 'latest', sourceType: 'module' }),
  //   ),
  // );

  // const serverCodeWithBlocks = format(
  //   jsCode.replace(/'---'/, '//server-block'),
  //   {
  //     semi: false,
  //     parser: 'babel',
  //   },
  // );
  // const serverCode = serverCodeWithBlocks
  //   .replace(/\/\/server-block/g, '')
  //   .trim();

  // const lines = serverCodeWithBlocks.split(/\r?\n/);
  // let lastImportLine = -1;
  // let lastServerLine = -1;

  // lines.forEach((line, lineIndex) => {
  //   if (line.indexOf('import') === 0) {
  //     lastImportLine = lineIndex;
  //   }
  //   if (line.indexOf('//server-block') === 0) {
  //     lastServerLine = lineIndex;
  //   }
  // });

  // const removeLinesCount = lastServerLine - lastImportLine + 1;
  // const clientLines = [...lines];
  // clientLines.splice(0, 1);
  // clientLines.splice(lastImportLine, removeLinesCount);
  // const rawclientCode = clientLines.join('\n');
  // const clientCode = format(rawclientCode, {
  //   semi: false,
  //   parser: 'babel',
  // }).trim();

  // console.log('--SERVER----------');
  // console.log(serverCode);
  // console.log('--CLIENT----------');
  // console.log(clientCode);

  // writeFileSync('src/generated/main.server.tsx', serverCode, 'utf-8');
  // writeFileSync('src/generated/main.client.tsx', clientCode, 'utf-8');
})();
