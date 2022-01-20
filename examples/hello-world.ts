import { Nubo } from '../mod.ts';

Nubo.router.get('/', ({ response }) => {
  response.body = { name: 'Hello Nubo!' };
});

await Nubo.start();
