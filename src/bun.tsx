// to run this:
//   bun --jsx-production react-hello-world.jsx

// This will become the official react-dom/server.bun build a little later
// It will be the default when you import from "react-dom/server"
// That will work via the "bun" package.json export condition (which bun already supports)
import { useState } from 'react';
import { renderToString } from 'react-dom/server';
const headers = {
  headers: {
    'Content-Type': 'text/html',
  },
};

const App = () => {
  const [value] = useState('hi there');

  return (
    <html>
      <body>
        <h1>Hello World</h1>
        <p>{value}</p>
      </body>
    </html>
  );
};

const port = Number(process.env.PORT || 5000);

export default {
  port,
  async fetch(req) {
    return new Response(await renderToString(<App />), headers);
  },
};

console.log(`Server running on\n  http://localhost:${port}`);

// import render from 'preact-render-to-string';
// import { h } from 'preact';
// import { html } from 'htm/preact';

// const App = <div class="foo">content</div>;
// console.log(render(html`App`));
// console.log(render(html`<h1>Hello from Preact</h1>`));

// import Bao from 'baojs';

// const app = new Bao();
// const port = parseInt(process.env.PORT || '5000');

// app.get('/', (ctx) => {
//   ctx.headers.set('content-type', 'text/html');
//   return ctx.sendText('<h1>Nubo</h1>');
// });

// const server = app.listen({ port });

// console.log(`http://localhost:${server.port}`);
