// reflect-metadata has to be the first package in the list
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { prisma, resolvers } from '@nubojs/data';
import playground from 'graphql-playground-middleware-express';
import { buildSchema } from 'type-graphql';
import { graphqlHTTP } from 'express-graphql';

const PORT = parseInt(process.env.PORT || '5003');
const app = express();

export const startServer = async () => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  app.get('/playground', playground({ endpoint: '/graphql' }));

  app.use(helmet());
  app.use(cors());

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
