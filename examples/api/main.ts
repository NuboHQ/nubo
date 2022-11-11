import { config } from '../../api/config.ts';
import { api, startApi } from '../../api/mod.ts';

api.get('/', (_, res) => {
  res.json({ name: 'nubo-api', region: config.region });
});

startApi({ name: 'nubo-api' });
