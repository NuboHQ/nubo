import { api, startApi } from '../../api/mod.ts';
import index from './functions/index.ts';
import hello from './functions/hello.ts';

api.get('/', async (_, res) => {
  const result = index();
  const data = await result.json();

  res.json(data);
});

api.get('/hello', async (_, res) => {
  const result = hello();
  const data = await result.json();

  res.json(data);
});

startApi({ name: 'nubo-functions' });
