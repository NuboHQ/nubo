import { yargs } from '@/deps.ts';
import { config } from '@/cli/config.ts';
import { addCommands } from '@/cli/commands/mod.ts';

export const nubo = () => {
  const rootYargs = yargs()
    .scriptName('nubo')
    .usage('Usage: nubo <command> [options]')
    .alias('h', 'help')
    .version('version', `Nubo CLI: ${config.version}`)
    .help();

  addCommands(rootYargs);

  rootYargs.parse(Deno.args);
};
