import 'dotenv/config';
import { readFileSync } from 'fs';
import allColors from 'colors';

const colors: any = allColors;

import { connect } from '.';

export const processCommands = async () => {
  const [, , command, ...args] = process.argv;

  if (!command) {
    console.log('Usage:');
    console.log('nubo <command>');

    process.exit(0);
  }

  if (command === 'push') {
    const [path] = args;

    if (!path) {
      console.log('Usage:');
      console.log('nubo push <migration_file.sql>');
      process.exit(0);
    }

    push(path);
  }
};

export const push = async (path: string) => {
  try {
    const migration = readFileSync(path, 'utf-8');
    const connection = connect();

    await connection.execute(migration);
    console.log(
      colors.brightWhite('[nubo]'),
      colors.brightGreen('success'),
      '-',
      'Successfully completed database push',
    );
  } catch (error: any) {
    console.error(
      colors.brightWhite('[nubo]'),
      colors.brightRed('error'),
      '-',
      error.message || error.body || error,
    );
  }
};

(async () => {
  await processCommands();
})();
