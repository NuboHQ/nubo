import { NuboApi } from './types.ts';
import { opine } from './deps.ts';
import { config } from './config.ts';

export const api = opine() as NuboApi;

export const startApi = ({ name }: { name: string }) => {
  api.listen(config.port, () =>
    console.log(`[${name}] http://localhost:${config.port}`),
  );
};
