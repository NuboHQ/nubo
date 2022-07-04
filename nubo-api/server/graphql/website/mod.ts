import { gql } from '@/deps.ts';
import {
  getWebsites,
  getWebsite,
  addWebsite,
  updateWebsite,
  removeWebsite,
} from '@nubo/websites/mod.ts';
import {
  AddWebsiteQueryData,
  UpdateWebsiteQueryData,
  GetWebsitesQueryData,
  GetWebsiteQueryData,
  RemoveWebsiteQueryData,
} from './types.ts';

export const typeDefs = gql`
  type Website {
    id: ID!
    created: Date!
    updated: Date!
    name: String!
    domains: [String!]!
  }

  type WebsitesResponse {
    items: [Website]
    pagination: JSON!
  }

  input AddWebsiteInput {
    name: String!
    domains: [String!]!
  }

  input UpdateWebsiteFilterInput {
    id: ID
    name: String
    domains: [String!]
  }

  input RemoveWebsiteFilterInput {
    id: ID
    name: String
    domains: [String!]
  }

  input UpdateWebsiteInput {
    name: String
    domains: [String!]
  }

  type RemoveWebsiteRespone {
    removed: Boolean
  }

  extend type Query {
    websites(
      filter: JSON
      pageSize: Number
      page: Number
      order: JSON
    ): WebsitesResponse
    website(filter: JSON!): Website
  }

  extend type Mutation {
    addWebsite(website: AddWebsiteInput): Website
    updateWebsite(
      filter: UpdateWebsiteFilterInput!
      website: UpdateWebsiteInput
    ): Website
    removeWebsite(filter: RemoveWebsiteFilterInput!): RemoveWebsiteRespone
  }
`;

export const queries = {
  websites: async (
    // deno-lint-ignore no-explicit-any
    _: any,
    { filter, pageSize, page, order }: GetWebsitesQueryData,
  ) => {
    const result = await getWebsites({ filter, pageSize, page, order });

    return result;
  },
  // deno-lint-ignore no-explicit-any
  website: async (_: any, { filter }: GetWebsiteQueryData) => {
    const website = await getWebsite(filter);

    return website;
  },
};

export const mutations = {
  // deno-lint-ignore no-explicit-any
  addWebsite: async (_: any, { website }: AddWebsiteQueryData) => {
    const newWebsite = await addWebsite(website);

    return newWebsite;
  },
  updateWebsite: async (
    // deno-lint-ignore no-explicit-any
    _: any,
    { filter, website }: UpdateWebsiteQueryData,
  ) => {
    const updatedWebsite = await updateWebsite({
      filter,
      website,
    });

    return updatedWebsite;
  },
  removeWebsite: async (
    // deno-lint-ignore no-explicit-any
    _: any,
    { filter }: RemoveWebsiteQueryData,
  ) => {
    const removed = await removeWebsite(filter);

    return { removed };
  },
};
