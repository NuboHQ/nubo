import { gql } from '@/deps.ts';

export const typeDefs = gql`
  scalar JSON
  scalar Date
  scalar Number

  type Nubo {
    name: String
  }

  type Query {
    nubo: Nubo
  }

  type Mutation {
    empty: String
  }
`;

export const queries = {
  nubo: () => {
    return {
      name: 'nubo-api',
    };
  },
};
