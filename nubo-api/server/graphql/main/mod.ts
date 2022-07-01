import { gql } from '@/deps.ts';

export const typeDefs = gql`
  scalar JSON

  type Nubo {
    name: String
  }

  type Query {
    nubo: Nubo
  }
`;

export const queries = {
  nubo: () => {
    return {
      name: 'nubo-api',
    };
  },
};
