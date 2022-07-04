import { gql } from '@/deps.ts';
import { getWebsite, addWebsite } from '@nubo/website/mod.ts';
import { AddWebsiteQueryData, GetWebsiteQueryData } from './types.ts';

export const typeDefs = gql`
  type Website {
    id: ID!
    created: Date!
    updated: Date!
    name: String!
    domains: [String!]!
  }

  input AddWebsiteInput {
    name: String!
    domains: [String!]!
  }

  extend type Query {
    website(filter: JSON!): Website
  }

  extend type Mutation {
    addWebsite(website: AddWebsiteInput): Website
  }
`;

export const queries = {
  // deno-lint-ignore no-explicit-any
  website: async (_: any, { filter }: GetWebsiteQueryData) => {
    const website = await getWebsite({ filter });

    return website;
  },
};

export const mutations = {
  // deno-lint-ignore no-explicit-any
  addWebsite: async (_: any, { website }: AddWebsiteQueryData) => {
    const newWebsite = await addWebsite(website);

    return newWebsite;
  },
};
