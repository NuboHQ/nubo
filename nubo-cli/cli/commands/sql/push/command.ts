import type { Arguments } from '@/deps.ts';
import { spinner } from '@/cli/spinner.ts';

export interface PushOptions extends Arguments {
  schema: string;
}

export const push = async (args: PushOptions) => {
  spinner.start(`Pushing schema from ${args.schema}`);
  const schema = await Deno.readTextFile(args.schema);

  await fetch('https://local.nubo.services/1/push', {
    method: 'POST',
    body: JSON.stringify({ schema }),
  });

  spinner.succeed(`Pushed schema from ${args.schema}`);
};
