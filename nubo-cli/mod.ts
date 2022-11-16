import { yargs } from '@/nubo-cli/deps.ts';
import { config } from '@/nubo-cli/config.ts';
import { addCommands } from '@/nubo-cli/commands/mod.ts';

export const nuboCli = () => {
  const rootYargs = yargs()
    .scriptName('nubo')
    .usage('Usage: nubo <command> [options]')
    .alias('h', 'help')
    .version('version', `Nubo CLI: ${config.version}`)
    .help();

  addCommands(rootYargs);

  rootYargs.parse(Deno.args);
};
