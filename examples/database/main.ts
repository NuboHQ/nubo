import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import { prisma } from './prisma.ts';

console.log('------');
console.log(Deno.env.get('DATABASE_URL'));
console.log('------');

const port = parseInt(Deno.env.get('PORT') || '5000');

import { opine } from 'https://deno.land/x/opine@2.3.3/mod.ts';

const app = opine();

app.get('/', (_, res) => {
  const now = new Date();

  res.json({
    platform: 'nubo',
    time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
  });
});

app.get('/cities/nubo', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || 0) || 10;
    const cities = await prisma.city.findMany({ take: limit });
    const now = new Date();

    res.json({
      platform: 'nubo',
      database: {
        provider: 'nubo',
        type: 'nubosql',
      },
      time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      total: cities.length,
      cities,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.get('/log', async (req, res) => {
  try {
    const log = await prisma.log.create({
      data: {
        level: 'Info',
        message: `${req.method} ${req.url}`,
        meta: {
          // deno-lint-ignore no-explicit-any
          headers: req.headers as any,
        },
      },
    });

    res.json(log);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.get('/logs', async (_, res) => {
  try {
    const logs = await prisma.log.findMany({ take: 10 });

    res.json(logs);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.get('/logs/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const log = await prisma.log.findUnique({ where: { id } });

    if (!log) {
      res.status = 404;

      return res.json({ message: 'Not found' });
    }

    res.json(log);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(port, () => console.log(`http://localhost:${port}`));
