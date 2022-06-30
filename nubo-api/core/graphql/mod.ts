import { Application, Router, applyGraphQL, gql } from '../../deps.ts';

const types = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (parent: any, { id }: any, context: any, info: any) => {
      return 'Hello Nubo!';
    },
  },
};

export const graphql = async (app: Application) => {
  const path = '/graphql';
  const GraphQLService = await applyGraphQL<Router>({
    Router,
    path,
    typeDefs: types,
    resolvers: resolvers,
    usePlayground: true,
    // context: options.context,
  });

  app.use(GraphQLService.routes(), GraphQLService.allowedMethods());
};
