// reflect-metadata has to be the first package in the list
import 'reflect-metadata';
import { resolvers } from '@generated/type-graphql';
import { prisma } from '../core/data';
import compression from 'compression';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { graphqlHTTP } from 'express-graphql';
import { renderPage } from 'vite-plugin-ssr';
import playground from 'graphql-playground-middleware-express';

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;
const port = process.env.PORT || 5555;
const app = express();

startServer();

async function startServer() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  app.use(compression());

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      context: { prisma },
    }),
  );

  if (isProduction) {
    const sirv = require('sirv');
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = require('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;

    app.use(viteDevMiddleware);

    app.get('/playground', playground({ endpoint: '/graphql' }));
  }

  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) return next();

    const { body, statusCode, contentType } = httpResponse;

    res.status(statusCode).type(contentType).send(body);
  });

  app.listen(port);

  console.log(`http://localhost:${port}`);
}
