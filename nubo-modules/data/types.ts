export type DataModule = {
  init: () => Promise<void>;
  add: <T extends Item>({
    name,
    data,
  }: {
    name: string;
    data: Partial<T>;
  }) => Promise<T>;
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
