import { Website } from '@nubo/website/types.ts';

export type AddWebsiteQueryData = {
  website: Website;
};

export type GetWebsiteQueryData = {
  filter: Partial<Website>;
};
