import type { Arguments } from '@/nubo-cli/deps.ts';
import { spinner } from '@/nubo-cli/spinner.ts';

export interface PushOptions extends Arguments {
  schema: string;
}

export const push = async (args: PushOptions) => {
  spinner.start(`Pushing schema from ${args.schema}`);
  const schema = await Deno.readTextFile(args.schema);

  await fetch(`${Deno.env.get('DATA_PROXY_URL')}/1/push`, {
    method: 'POST',
    body: JSON.stringify({ schema }),
  });

  spinner.succeed(`Pushed schema from ${args.schema}`);
};
