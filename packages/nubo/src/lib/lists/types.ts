import WebSocket from 'isomorphic-ws';

export type OnUpdateHandler<T> = (result: NuboQueryResult<T>) => void;
export type OnOpenHandler = (event: any) => void;
export type OnErrorHandler = (error: Error) => void;
export type OnCloseHandler = (event: WebSocket.CloseEvent) => void;

export type NuboSubscriptionOptions<T> = {
  list: string;
  apiKey?: string;
  options?: NuboQueryOptions<T>;
  subscriptionBaseUrl?: string;
  onOpen?: OnOpenHandler;
  onUpdate?: OnUpdateHandler<T>;
  onError?: OnErrorHandler;
  onClose?: OnCloseHandler;
  maxRetries?: number;
  retryDelay?: number;
};

export type NuboQueryResult<T> = {
  items: T[];
  pagination: Pagination;
};

export interface NuboQueryOptions<T> {
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

export interface Pagination {
  total: number;
  pages: number;
  firstPage: boolean;
  lastPage: boolean;
  page: number;
  pageSize: number;
}
