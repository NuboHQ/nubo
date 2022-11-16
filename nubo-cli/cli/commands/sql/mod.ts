import { addGenerateCommand } from './generate/mod.ts';
import { addPushCommand } from './push/mod.ts';

export const addSqlCommands = (rootYargs: any) => {
  rootYargs.command('sql', '', (yargs: any) => {
    const sqlYargs = yargs.usage('Usage: nubo sql [options]');

    addGenerateCommand(sqlYargs);
    addPushCommand(sqlYargs);

    return sqlYargs;
  });
};
