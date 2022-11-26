import { watch } from 'chokidar';
import { last } from 'lodash';
import shell from '../shell';
import { generate } from './generate';

const watcher = watch('.', {
  ignored: /(^|[\/\\])\../,
  ignoreInitial: true,
  persistent: true,
});

console.log('Watching for *.nubo file changes...');

watcher.on('all', async (event, path) => {
  if (last(path.split('.')) === 'nubo') {
    console.log(`wait - compiling ${path}`);

    try {
      generate(path);
    } catch (error) {
      return;
    }

    await shell({
      command: 'npm run build:client:dev',
      onData: (data) => {
        // console.log(data);
      },
    });
    console.log(`event - compiled client and server successfully`);
  }
});
