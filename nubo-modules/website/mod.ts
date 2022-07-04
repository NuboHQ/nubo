import { data } from '@nubo/data/mod.ts';
import type { Website } from './types.ts';

export const addWebsite = async (website: Partial<Website>) => {
  const newWebsite = await data.add<Website>({
    name: 'website',
    data: website,
  });

  return newWebsite;
};

export const getWebsite = async ({ filter }: { filter: Partial<Website> }) => {
  const website = await data.findOne<Website>({ name: 'website', filter });

  return website;
};
