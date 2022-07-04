export type DataModule = {
  init: () => Promise<void>;
  add: <T extends Item>(options: AddOptions<T>) => Promise<T>;
  find: <T extends Item>(options: FindOptions<T>) => Promise<FindResult<T>>;
  findOne: <T extends Item>(options: FindOneOptions<T>) => Promise<T | null>;
};

export interface Item {
  id: string;
  created: Date;
  updated: Date;
}

export type ItemOrder<T> = {
  [K in keyof T]: 'asc' | 'desc';
};

export interface Paging {
  page: number;
  pageSize: number;
  startIndex: number;
  endIndex: number;
}

export interface Pagination {
  itemsTotal: number;
  pagesTotal: number;
  firstPage: boolean;
  lastPage: boolean;
  page: number;
  pageSize: number;
}

export type FindOptions<T> = {
  name: string;
  filter?: Partial<T>;
  pageSize?: number;
  page?: number;
  order?: ItemOrder<Partial<T>>;
};

export type FindResult<T> = {
  items: T[];
  pagination: Pagination;
};

export type FindOneOptions<T> = {
  name: string;
  filter?: Partial<T>;
};

export type AddOptions<T> = {
  name: string;
  data: Partial<T>;
};
