import { data } from '@nubo/data/mod.ts';
import { omit } from '@nubo/utils/mod.ts';
import { getWebsite } from '@nubo/websites/mod.ts';
import { Website } from '@nubo/websites/types.ts';
import type { Page, PagesOrder } from './types.ts';

const PAGES_NAME = 'pages';

export const addPage = async (page: Partial<Page>) => {
  const newPage = await data.add<Page>({
    name: PAGES_NAME,
    data: page,
  });

  return newPage;
};

export const updatePage = async ({
  filter,
  page,
}: {
  filter: Partial<Page>;
  page: Partial<Page>;
}) => {
  const updatedPage = await data.update<Page>({
    name: PAGES_NAME,
    filter: filter,
    data: page,
  });

  return updatedPage;
};

export const getPages = async ({
  filter,
  pageSize,
  page,
  order,
}: {
  filter: Partial<Page>;
  pageSize?: number;
  page?: number;
  order?: PagesOrder;
}) => {
  const item = await data.find<Page>({
    name: PAGES_NAME,
    filter,
    pageSize,
    page,
    order,
  });

  return item;
};

export const getPage = async (filter: Partial<Page>) => {
  if (!filter.website) {
    throw new Error('Missing website in filter');
  }
  const website = await getWebsite(filter.website);

  if (!website) {
    throw new Error('Website not found');
  }

  const filterWithoutWebsite = omit(filter, ['website']);
  const page = await data.findOne<Page>({
    name: PAGES_NAME,
    filter: { ...filterWithoutWebsite, websiteId: website.id },
  });
  const pageWithWebsite = { ...page, website };

  return { ...page, website };
};

export const removePage = async (filter: Partial<Page>) => {
  const removed = await data.remove<Page>({ name: PAGES_NAME, filter });

  return removed;
};
