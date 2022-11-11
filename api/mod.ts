import { NuboApi } from './types.ts';
import { opine } from './deps.ts';
import { config } from './config.ts';

export const api = opine() as NuboApi;

export const startApi = () => {
  api.listen(config.port, () =>
    console.log(`[nubo-api] http://localhost:${config.port}`),
  );
};
