// reflect-metadata has to be the first package in the list
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { prisma, resolvers } from '@nubojs/database';
import playground from 'graphql-playground-middleware-express';
import { buildSchema } from 'type-graphql';
import { graphqlHTTP } from 'express-graphql';
import { config } from '@nubojs/api-config';
import cookieParser from 'cookie-parser';

const PORT = parseInt(process.env.PORT || '5003');
const app = express();

export const startServer = async () => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  app.get('/playground', playground({ endpoint: '/graphql' }));

  app.use(helmet());
  app.use(cookieParser(config.secretKey));
  app.use(cors({ origin: config.api.allowedUrls, credentials: true }));

  app.use('*', (req, res, next) => {
    console.log('-----');
    console.log(req.headers);
    console.log('-----');
    next();
  });

  const options = {
    signed: true,
    maxAge: 90 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    domain: new URL(config.website.url).hostname,
  };

  app.get('/set', async (req, res) => {
    res.cookie('nubo_auth', 'hello', options);
    res.json({ message: 'set' });
  });

  app.get('/get', async (req, res) => {
    res.json({ message: 'got', cookie: req.signedCookies['nubo_auth'] });
  });

  app.get('/remove', async (req, res) => {
    res.cookie('nubo_auth', null, { ...options, maxAge: 0 });
    res.json({ message: 'removed' });
  });

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      context: { prisma },
    }),
  );

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};
