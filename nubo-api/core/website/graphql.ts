import { gql } from '@/deps.ts';
import { Website } from '@nubo-shared/website/mod.ts';

export const types = gql`
  type Website {
    name: String
    domains: [String]
  }

  extend type Query {
    website: Website
  }
`;

const website: Website = { name: 'Nubo Demo', domains: ['nubo.local'] };

export const resolvers = {
  Query: {
    website: () => {
      return website;
    },
  },
};
