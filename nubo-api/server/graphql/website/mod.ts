import { gql } from '@/deps.ts';
import type { Website } from '@nubo/website/mod.ts';

export const typeDefs = gql`
  type Website {
    name: String
    domains: [String]
  }

  extend type Query {
    website: Website
  }
`;

const website: Website = { name: 'Nubo Demo', domains: ['nubo.local'] };

export const queries = {
  website: () => {
    return website;
  },
};
