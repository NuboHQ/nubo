import 'https://deno.land/x/dotenv/load.ts';
import { PrismaClient } from './generated/client/deno/edge.ts';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL'),
    },
  },
});

const port = parseInt(Deno.env.get('PORT') || '5000');

import { opine } from 'https://deno.land/x/opine@2.3.3/mod.ts';

const app = opine();

app.get('/', async (req, res) => {
  try {
    const log = await prisma.log.create({
      data: {
        level: 'Info',
        message: `${req.method} ${req.url}`,
        meta: {
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
