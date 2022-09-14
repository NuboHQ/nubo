import { gql } from '@/deps.ts';
import {
  getPages,
  getPage,
  addPage,
  updatePage,
  removePage,
} from '@nubo/pages/mod.ts';
import {
  AddPageQueryData,
  UpdatePageQueryData,
  GetPagesQueryData,
  GetPageQueryData,
  RemovePageQueryData,
} from './types.ts';

export const typeDefs = gql`
  type Page {
    id: ID!
    created: Date!
    updated: Date!
    title: String!
    path: String!
    website: Website
  }

  type PagesResponse {
    items: [Page]!
    pagination: JSON!
  }

  input AddPageDataInput {
    websiteId: ID!
    title: String!
    path: String!
  }

  input UpdatePageFilterInput {
    websiteId: ID
    title: String
    path: String
  }

  input RemovePageFilterInput {
    id: ID
    websiteId: ID
    title: String
    path: String
  }

  input UpdatePageDataInput {
    websiteId: ID
    title: String
    path: String
  }

  type RemovePageRespone {
    removed: Boolean
  }

  extend type Query {
    pages(
      filter: JSON
      pageSize: Number
      page: Number
      order: JSON
    ): PagesResponse
    page(filter: JSON!): Page
  }

  extend type Mutation {
    addPage(data: AddPageDataInput): Page
    updatePage(filter: UpdatePageFilterInput!, data: UpdatePageDataInput): Page
    removePage(filter: RemovePageFilterInput!): RemovePageRespone
  }
`;

export const queries = {
  pages: async (
    // deno-lint-ignore no-explicit-any
    _: any,
    { filter, pageSize, page, order }: GetPagesQueryData,
  ) => {
    const result = await getPages({ filter, pageSize, page, order });

    return result;
  },
  // deno-lint-ignore no-explicit-any
  page: async (_: any, { filter }: GetPageQueryData) => {
    const page = await getPage(filter);

    return page;
  },
};

export const mutations = {
  // deno-lint-ignore no-explicit-any
  addPage: async (_: any, { data }: AddPageQueryData) => {
    const newPage = await addPage(data);

    return newPage;
  },
  updatePage: async (
    // deno-lint-ignore no-explicit-any
    _: any,
    { filter, data }: UpdatePageQueryData,
  ) => {
    const updatedPage = await updatePage({
      filter,
      page: data,
    });

    return updatedPage;
  },
  removePage: async (
    // deno-lint-ignore no-explicit-any
    _: any,
    { filter }: RemovePageQueryData,
  ) => {
    const removed = await removePage(filter);

    return { removed };
  },
};
