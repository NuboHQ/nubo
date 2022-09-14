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
    items: [Website]!
    pagination: JSON!
  }

  input AddWebsiteDataInput {
    name: String!
    domains: [String!]!
  }

  input UpdateWebsiteFilterInput {
    name: String
    domains: [String]
  }

  input RemoveWebsiteFilterInput {
    id: ID
    name: String
    domains: [String]
  }

  input UpdateWebsiteDataInput {
    name: String
    domains: [String]
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
    addWebsite(data: AddWebsiteDataInput): Website
    updateWebsite(
      filter: UpdateWebsiteFilterInput!
      data: UpdateWebsiteDataInput
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
    console.log('get website');
    const website = await getWebsite(filter);

    return website;
  },
};

export const mutations = {
  // deno-lint-ignore no-explicit-any
  addWebsite: async (_: any, { data }: AddWebsiteQueryData) => {
    const newWebsite = await addWebsite(data);

    return newWebsite;
  },
  updateWebsite: async (
    // deno-lint-ignore no-explicit-any
    _: any,
    { filter, data }: UpdateWebsiteQueryData,
  ) => {
    const updatedWebsite = await updateWebsite({
      filter,
      website: data,
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
