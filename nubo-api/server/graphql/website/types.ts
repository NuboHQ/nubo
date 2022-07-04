import { Website, WebsitesOrder } from '@nubo/website/types.ts';

export type AddWebsiteQueryData = {
  website: Website;
};

export type UpdateWebsiteQueryData = {
  filter: Partial<Website>;
  website: Partial<Website>;
};

export type GetWebsitesQueryData = {
  filter: Partial<Website>;
  pageSize?: number;
  page?: number;
  order?: WebsitesOrder;
};

export type GetWebsiteQueryData = {
  filter: Partial<Website>;
};

export type RemoveWebsiteQueryData = {
  filter: Partial<Website>;
};
