import { push, PushOptions } from './command.ts';

export const addPushCommand = (parentYargs: any) => {
  parentYargs.command(
    'push',
    '',
    (yargs: any) => {
      return yargs
        .option('schema', {
          alias: 's',
          description: 'Path to Prisma schema',
          default: 'prisma/schema.prisma',
        })
        .usage('Usage: nubo sql push [options]');
    },
    async (args: PushOptions) => {
      await push(args);
    },
  );
};
