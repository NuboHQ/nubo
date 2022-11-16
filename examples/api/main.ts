import { config } from '@/nubo-api/config.ts';
import { api, startApi } from '@/nubo-api/mod.ts';

api.get('/', (_, res) => {
  res.json({ name: 'nubo-api-example', region: config.region });
});

startApi({ name: 'nubo-api' });
