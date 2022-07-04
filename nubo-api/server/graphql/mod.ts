import { Application, Router, applyGraphQL } from '@/deps.ts';
import { config } from '@nubo/config/mod.ts';
import * as mainGraphql from './main/mod.ts';
import * as pagesGraphql from './pages/mod.ts';
import * as websiteGraphql from './website/mod.ts';

const typeDefs = [
  mainGraphql.typeDefs,
  pagesGraphql.typeDefs,
  websiteGraphql.typeDefs,
];

const resolvers = {
  Query: {
    ...mainGraphql.queries,
    ...pagesGraphql.queries,
    ...websiteGraphql.queries,
  },
  Mutation: {
    ...pagesGraphql.mutations,
    ...websiteGraphql.mutations,
  },
};

export const graphql = async (app: Application) => {
  const path = '/graphql';
  const GraphQLService = await applyGraphQL<Router>({
    Router,
    path,
    typeDefs,
    resolvers,
    usePlayground: config.graphql.playground,
  });

  app.use(GraphQLService.routes(), GraphQLService.allowedMethods());
};
