import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { statSync } from 'fs';
import { PrismaClient } from '@prisma/client/edge';
import * as handler from './functions/hello';
import './logs';

const prisma = new PrismaClient();

const port = Number(process.env.PORT || 5000);
const app = new Hono();

const getLastUpdated = () => {
  const data = statSync('./.nubo/app.js');

  return data.mtime;
};

if (process.env.NODE_ENV !== 'production') {
  app.get('/__dev', (c) => {
    const updated = getLastUpdated();

    return c.json({ updated });
  });
}

app.get(handler.config.path, async (c, next) => {
  return handler.default({
    req: c.req,
    region: process.env.NUBO_REGION || 'local',
  });
});

app.get('/log', async (c) => {
  const log = await prisma.log.create({
    data: {
      message: 'Hello',
      level: 'Info',
      meta: {
        headers: {},
      },
    },
  });

  return c.json({ log });
});

app.get('/log/:id', async (c) => {
  const log = await prisma.log.create({
    data: {
      message: 'Hello',
      level: 'Info',
      meta: {
        headers: {},
      },
    },
  });

  return c.json({ log });
});

app.get('/logs', async (c) => {
  const logs = await prisma.log.findMany();

  return c.json({ logs });
});

app.get('/', async (c) => {
  const [logs] = await Promise.all([prisma.log.findMany()]);
  // const data = result.json();
  // console.log(data);
  const app = renderToString(<App logs={logs} />);
  const nuboData = {
    env: { environment: process.env.NODE_ENV },
    props: { logs },
  };

  const html = `
    <html lang="en">
      <head>
        <title>Nubo</title>
        <script src="app.js" async defer></script>
        <script id="__NUBO_DATA__" type="application/json">
        ${JSON.stringify(nuboData)}
        </script>
      </head>

      <body>
        <div id="root">${app}</div>
      </body>
    </html>
  `;

  return c.html(html);
});

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
app.use('/*', serveStatic({ root: './.nubo' }));

if (process.env.NODE_ENV === 'production') {
  console.log(`http://localhost:${port}`);
}

const start = async () => {
  Bun.serve({ port, fetch: app.fetch });
};

start();
