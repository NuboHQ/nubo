import WebSocket from 'isomorphic-ws';

export type OnUpdateHandler<T> = (result: QueryResult<T>) => void;
export type OnOpenHandler = (event: WebSocket.OpenEvent) => void;
export type OnErrorHandler = (error: Error) => void;
export type OnCloseHandler = (event: WebSocket.CloseEvent) => void;

export type LiveQueryOptions<T> = {
  list: string;
  apiKey?: string;
  options?: QueryOptions<T>;
  baseUrl?: string;
  onOpen?: OnOpenHandler;
  onUpdate?: OnUpdateHandler<T>;
  onError?: OnErrorHandler;
  onClose?: OnCloseHandler;
  maxRetries?: number;
  retryDelay?: number;
};

export interface Pagination {
  total: number;
  pages: number;
  firstPage: boolean;
  lastPage: boolean;
  page: number;
  pageSize: number;
}

export type QueryResult<T> = {
  items: T[];
  pagination: Pagination;
};

export interface QueryOptions<T> {
  filter?: Filter<T>;
  orderBy?: OrderBy<T>;
  pageSize?: number;
  page?: number;
}

export type FilterKey = '$and' | '$or' | '$not';

export type Filter<T> = {
  [K in keyof T | FilterKey]?: any;
};

export type OrderBy<T> = {
  [K in keyof T]?: 'asc' | 'desc';
};
