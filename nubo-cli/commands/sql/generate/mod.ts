import { generate, GenerateOptions } from './command.ts';

export const addGenerateCommand = (parentYargs: any) => {
  parentYargs.command(
    'generate',
    '',
    (yargs: any) => {
      return yargs
        .option('schema', {
          alias: 's',
          description: 'Path to Prisma schema',
          default: 'prisma/schema.prisma',
        })
        .usage('Usage: nubo sql generate [options]');
    },
    async (args: GenerateOptions) => {
      await generate(args);
    },
  );
};
