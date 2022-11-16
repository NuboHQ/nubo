import type { Arguments } from '@/nubo-cli/deps.ts';
import { spinner } from '@/nubo-cli/spinner.ts';

export interface GenerateOptions extends Arguments {
  schema: string;
}

export const generate = async (args: GenerateOptions) => {
  spinner.start(`Generating schema from ${args.schema}`);
  const schema = await Deno.readTextFile(args.schema);

  await fetch('https://local.nubo.services/1/generate', {
    method: 'POST',
    body: JSON.stringify({ schema }),
  });

  spinner.succeed(`Generated schema from ${args.schema}`);
};
