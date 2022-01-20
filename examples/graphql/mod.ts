import { Nubo, gql } from '../../mod.ts';

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

await Nubo.graphql({
  types,
  resolvers,
  playground: true,
});

await Nubo.start();
