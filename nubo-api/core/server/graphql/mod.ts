import { config, Application, Router, applyGraphQL, gql } from '@/deps.ts';
import * as pagesGraphql from '@/core/pages/graphql.ts';

const types = gql`
  scalar JSON

  type Nubo {
    name: String
  }

  type Query {
    nubo: Nubo
  }
`;

const resolvers = {
  Query: {
    nubo: (parent: any, { id }: any, context: any, info: any) => {
      return {
        name: config.name,
      };
    },
    ...pagesGraphql.resolvers.Query,
  },
};

export const graphql = async (app: Application) => {
  const path = '/graphql';
  const GraphQLService = await applyGraphQL<Router>({
    Router,
    path,
    typeDefs: [types, pagesGraphql.types],
    resolvers: resolvers,
    usePlayground: true,
    // context: options.context,
  });

  app.use(GraphQLService.routes(), GraphQLService.allowedMethods());
};
