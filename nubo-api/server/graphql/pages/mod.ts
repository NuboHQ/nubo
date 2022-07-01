import { gql } from '@/deps.ts';
import { Page } from '@nubo/pages/mod.ts';

export const typeDefs = gql`
  type Page {
    title: String
  }

  extend type Query {
    pages: [Page]
    page(path: String): Page
  }
`;

export type PageQueryData = {
  path?: string;
};

const pages: { [path: string]: Page } = { '/': { title: 'Home' } };

export const queries = {
  pages: () => {
    const allPages: Page[] = [];

    for (const path in pages) {
      allPages.push(pages[path]);
    }

    return allPages;
  },

  // deno-lint-ignore no-explicit-any
  page: (_: any, { path }: PageQueryData) => {
    if (path) {
      const page = pages[path];

      return page || null;
    }

    return null;
  },
};
