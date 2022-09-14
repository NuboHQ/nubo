import { Website, WebsitesOrder } from '@nubo/websites/types.ts';

export type AddWebsiteQueryData = {
  data: Website;
};

export type UpdateWebsiteQueryData = {
  filter: Partial<Website>;
  data: Partial<Website>;
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
