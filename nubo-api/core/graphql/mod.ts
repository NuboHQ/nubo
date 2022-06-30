import { config, Application, Router, applyGraphQL, gql } from '../../deps.ts';

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
  },
};

export const graphql = async (app: Application) => {
  const path = '/graphql';
  const GraphQLService = await applyGraphQL<Router>({
    Router,
    path,
    typeDefs: [types],
    resolvers: resolvers,
    usePlayground: false,
    // context: options.context,
  });

  app.use(GraphQLService.routes(), GraphQLService.allowedMethods());
};
