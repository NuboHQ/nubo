import { statSync } from 'fs';
import { Handler, Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';
import { renderToString } from 'react-dom/server';
import './logs';
import routes from './routes/_routes';

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

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
app.get('/.nubo/*', serveStatic({ root: './' }));

const url = './.nubo-routes/main.server';
const main = await import(url);

const handler: Handler = async (c) => {
  try {
    let redirectPath = null;

    const Nubo = {
      req: c.req,
      env: { region: process.env.NUBO_REGION },
      redirect: (path: string) => {
        redirectPath = path;
      },
    };
    const result = (await main.getServerProps(Nubo)) || {};

    if (result instanceof Response) {
      return result;
    }
    const props = result;

    if (redirectPath) {
      console.log(redirectPath);
      return c.redirect(redirectPath);
    }

    const app = renderToString(<main.default props={props} />);
    const nuboData = {
      env: { environment: process.env.NODE_ENV },
      props,
    };

    const html = `
	      <html lang="en">
	        <head>
	          <title>Nubo</title>
	          <script src="/.nubo/app.js" async defer></script>
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
  } catch (error) {
    return c.text(error.message);
  }
};

routes.forEach((route) => {
  app[route.method.toLowerCase()](route.path, handler);
});

app.onError((error, c) => {
  console.error(`${error.message}`);
  return c.text(`Error - ${error.message}`, 500);
});

app.notFound((c) => {
  return c.text(`Page not found`, 404);
});

if (process.env.NODE_ENV === 'production') {
  console.log(`http://localhost:${port}`);
}

// NOTE: cannot use this for reloading in dev - server/client hydration mismatch
// const start = async () => {
//   Bun.serve({ port, fetch: app.fetch });
// };

// start();

// const indexTsx = `
// import { startDev } from './src/dev';
// import { hydrateRoot } from 'react-dom/client';
// import { App } from './App.client';
// import { config } from './src/client/config';

// hydrateRoot(document.getElementById('root') as HTMLElement, <App />);

// if (config.env.environment !== 'production') {
//   startDev();
// }
// `;

// const appTsx = `
// import { value } from '../src/value';

// const logs = config.props.logs;

// export const App = () => {
//   return (
//     <div>
//       {value}
//       {logs.map((log) => (
//         <div key={log.id}>{log.message}</div>
//       ))}
//     </div>
//   );
// };
// `;

// await Bun.write('index.tsx', indexTsx);
// await Bun.write('App.client.tsx', appTsx);

// spawnSync(
//   [
//     'esbuild',
//     'src/client/index.tsx',
//     '--bundle',
//     '--sourcemap',
//     '--jsx=automatic',
//     '--outfile=.nubo/app.js',
//   ],
//   {
//     stderr: 'inherit',
//     stdout: 'inherit',
//     stdin: 'inherit',
//   },
// );

// spawnSync(['rm', 'index.tsx', 'App.client.tsx'], {
//   stderr: 'inherit',
//   stdout: 'inherit',
//   stdin: 'inherit',
// });

export default {
  port,
  fetch: app.fetch,
};
