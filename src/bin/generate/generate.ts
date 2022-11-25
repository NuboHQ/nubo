import { generate } from './lib';

const [file] = process.argv.slice(2);

if (!file) {
  console.error('Missing file');
  console.log('');
  console.log('Usage');
  console.log('   generate <file-name>');
  process.exit(0);
}

generate(file);
