import { Page, PagesOrder } from '@nubo/pages/types.ts';

export type AddPageQueryData = {
  data: Page;
};

export type UpdatePageQueryData = {
  filter: Partial<Page>;
  data: Partial<Page>;
};

export type GetPagesQueryData = {
  filter: Partial<Page>;
  pageSize?: number;
  page?: number;
  order?: PagesOrder;
};

export type GetPageQueryData = {
  filter: Partial<Page>;
};

export type RemovePageQueryData = {
  filter: Partial<Page>;
};
