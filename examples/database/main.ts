import { PrismaClient } from './generated/client/deno/edge.ts';

const prisma = new PrismaClient();

const port = parseInt(Deno.env.get('PORT') || '5000');

import { opine } from 'https://deno.land/x/opine@2.3.3/mod.ts';

const app = opine();

app.get('/', async (req, res) => {
  const log = await prisma.log.create({
    data: {
      level: 'Info',
      message: `${req.method} ${req.url}`,
      meta: {
        headers: JSON.stringify(req.headers),
      },
    },
  });

  res.json(log);
});

app.get('/logs', async (_, res) => {
  const logs = await prisma.log.findMany();

  res.json(logs);
});

app.get('/logs/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const log = await prisma.log.findUnique({ where: { id } });

  if (!log) {
    res.status = 404;

    return res.json({ message: 'Not found' });
  }

  // res.json(logs);
  res.json(log);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
