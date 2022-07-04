import { Pagination } from '@nubo/data/types.ts';

export type Result<T> = {
  items: T[];
  pagination: Pagination;
};
