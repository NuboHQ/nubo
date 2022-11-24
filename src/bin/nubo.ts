#!/usr/bin/env node
import shell from '../shell';

const { spawn } = require('child_process');
// const child = spawn('docker', ['pull', 'postgres']);
// const child = spawn('prisma', ['generate', '--data-proxy']);
const child = spawn('bun', ['run', 'dev']);

child.stdout.on('data', (data) => {
  console.log(data);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// shell({
//   command:
//     'esbuild src/client/index.tsx --bundle --watch --jsx=preserve --sourcemap --outfile=.nubo/app.js',
//   onData: (data) => {
//     console.log(data);
//   },
// });

// import { spawn } from 'bun';
// import * as colors from 'colors';

// console.log('');

// const runDev = spawn(['bun', '--hot', 'src/main.tsx'], {
//   stderr: 'inherit',
//   stdout: 'inherit',
//   stdin: 'inherit',
// });
// spawn(['bun', 'run', 'dev'], {
//   stderr: 'inherit',
//   stdout: 'inherit',
//   stdin: 'inherit',
// });

// await buildDev.exited;

// const { stdout, stdin } = spawn(['npm', 'run', 'dev'], {
//   stdout: 'pipe',
//   stdin: 'pipe',
// });

// const { stdout } = spawnSync(['npm', 'run', 'generate']);

// console.log(stdout.toString());
// const text = await new Response(stdout).text();
// console.log(text); // "const input = "hello world".repeat(400); ..."

// const result = exec(['echo "hello"']);
// console.log(result);
// const COMMANDS = ['dev', 'build', 'start'];

// const [command] = process.argv.slice(2);

// if (!command) {
//   console.log(colors.bold('Usage'));
//   console.log('');

//   console.log(colors.gray('  $'), 'nubo <command>');
//   process.exit(0);
// }

// if (!COMMANDS.includes(command)) {
//   console.log((colors as any).brightRed('Unknown command:'), 'nubo', command);
//   console.log('');

//   console.log(colors.bold('Usage'));
//   console.log('');
//   console.log(colors.gray('  $'), `nubo ${COMMANDS.join('|')}`);

//   process.exit(0);
// }

// console.log('do it:', command);
