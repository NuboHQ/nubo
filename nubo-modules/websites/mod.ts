import { data } from '@nubo/data/mod.ts';
import type { Website, WebsitesOrder } from './types.ts';

const WEBSITES_NAME = 'websites';

export const addWebsite = async (website: Partial<Website>) => {
  const newWebsite = await data.add<Website>({
    name: WEBSITES_NAME,
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
    name: WEBSITES_NAME,
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
    name: WEBSITES_NAME,
    filter,
    pageSize,
    page,
    order,
  });

  return website;
};

export const getWebsite = async (filter: Partial<Website>) => {
  const website = await data.findOne<Website>({ name: WEBSITES_NAME, filter });

  return website;
};

export const removeWebsite = async (filter: Partial<Website>) => {
  const removed = await data.remove<Website>({ name: WEBSITES_NAME, filter });

  return removed;
};
