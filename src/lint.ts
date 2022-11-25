import { format } from 'prettier';

const code = `
---
import { FC } from 'react';
import { PrismaClient } from 'client';

import { Log } from '@prisma/client';
const prisma = new PrismaClient();
await prisma.log.findMany();
const log: Log = {};

export { log }
---

const App: FC = () => {
  const log: Log = {};
  
  return <div>App</div>
}

export { App };
`;

(async () => {
  const jsCode = code
    .split(/\r?\n/)
    .map((line) => {
      if (line.indexOf('---') === 0) {
        return '//server-block';
      }

      return line;
    })
    .join('\n');
  const serverCodeWithBlocks = format(
    jsCode.replace(/'---'/, '//server-block'),
    {
      semi: false,
      parser: 'babel',
    },
  );
  const serverCode = serverCodeWithBlocks.replace(/\/\/server-block/g, '');

  const lines = serverCodeWithBlocks.split(/\r?\n/);
  let lastImportLine = -1;
  let lastServerLine = -1;

  console.log(lines);

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
  });
  // console.log({ lastImportLine, lastServerLine, removeLinesCount });
  console.log('--SERVER----------');
  console.log(serverCode);
  console.log('--CLIENT----------');
  console.log(clientCode);
  console.log('');
  // console.log(formattedCode);

  // const code = `
  // import { FC } from 'react';
  // //server
  // const result = await fetch('https://api.nubo.com/data');
  // //server
  // const App: FC = () => {};
  // `;
})();
