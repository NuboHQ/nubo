import { opine } from 'https://deno.land/x/opine@2.3.3/mod.ts';
import handler from './api/hello.ts';

const port = parseInt(Deno.env.get('PORT') || '3000');
const app = opine();

app.get('/', (_, res) => {
  res.json({ name: 'nubo-edge-function' });
});

app.get('/api/hello', async (_, res) => {
  const response = handler();

  response.headers.set('nubo-region', 'europe-west_london');
  res.headers = response.headers;
  res.json(await response.json());
});

app.listen(3000, () => console.log(`http://localhost:${port}`));
