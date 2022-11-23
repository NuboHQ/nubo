import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { statSync } from 'fs';

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

app.get('/', async (c) => {
  const app = renderToString(<App />);
  const nuboData = { env: { environment: process.env.NODE_ENV } };

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

export default {
  port,
  fetch: app.fetch,
};
