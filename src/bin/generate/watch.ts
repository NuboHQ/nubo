import { watch } from 'chokidar';
import { last } from 'lodash';
import shell from '../../shell';
import { generate } from './lib';

const watcher = watch('.', {
  ignoreInitial: true,
  persistent: true,
});

console.log('Watching for *.nubo file changes...');

watcher.on('all', async (event, path) => {
  if (last(path.split('.')) === 'nubo') {
    generate(path);

    console.log('Build client...');
    await shell({
      command: 'npm run build:client:dev',
      onData: (data) => {
        console.log(data);
      },
    });
  }
});

watcher.on('error', async (error) => {
  console.log('THERE WAS AN ERROR!!!!');
});
