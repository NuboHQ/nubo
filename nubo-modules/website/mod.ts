import { data } from '@nubo/data/mod.ts';
import type { Website, WebsitesOrder } from './types.ts';

export const addWebsite = async (website: Partial<Website>) => {
  const newWebsite = await data.add<Website>({
    name: 'website',
    data: website,
  });

  return newWebsite;
};

export const updateWebsite = async ({
  filter,
  website,
}: {
  filter: Partial<Website>;
  website: Partial<Website>;
}) => {
  const updatedWebsite = await data.update<Website>({
    name: 'website',
    filter: filter,
    data: website,
  });

  return updatedWebsite;
};

export const getWebsites = async ({
  filter,
  pageSize,
  page,
  order,
}: {
  filter: Partial<Website>;
  pageSize?: number;
  page?: number;
  order?: WebsitesOrder;
}) => {
  const website = await data.find<Website>({
    name: 'website',
    filter,
    pageSize,
    page,
    order,
  });

  return website;
};

export const getWebsite = async (filter: Partial<Website>) => {
  const website = await data.findOne<Website>({ name: 'website', filter });

  return website;
};

export const removeWebsite = async (filter: Partial<Website>) => {
  const removed = await data.remove<Website>({ name: 'website', filter });

  return removed;
};
