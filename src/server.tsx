import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';
import { renderToString } from 'react-dom/server';
import { App } from './App';
// import { join } from 'path';
// import { readFileSync } from 'fs';

const port = Number(process.env.PORT || 5000);
const app = new Hono();

// app.use('*', async (ctx, next) => {
//   // console.log(ctx.req.url);

//   await next();
// });

// const indexFilePath = join(__dirname, '../index.html');
// const indexFile = readFileSync(indexFilePath, 'utf-8');

// app.use('/bundle.js', (c) => {
//   return c.text("console.log('hi from code');");
// });

app.get('/', async (c) => {
  const app = renderToString(<App />);

  const html = `
    <html lang="en">
      <head>
        <script src="app.js" async defer></script>
      </head>

      <body>
        <div id="root">${app}</div>
      </body>
    </html>
  `;

  // const messages = ['Good Morning', 'Good Evening', 'Good Night', 'Gute Nacht'];
  // const html = indexFile.replace(
  //   '<div id="root"></div>',
  //   `<div id="root">${await renderToString(<App />)}</div>`,
  // );

  return c.html(html);
});

app.use('/*', serveStatic({ root: './public' }));

// app.get('/', (ctx) => {
//   return ctx.html('<h1>Nubo</h1>');
//   // return ctx.json({ message: 'Hello Hono' });
//   // return new Response(JSON.stringify({ message: 'hi' }), {
//   //   headers: { 'content-type': 'application/json' },
//   // });
// });

export default {
  port,
  fetch: app.fetch,
};
