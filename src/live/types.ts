import WebSocket from 'isomorphic-ws';

export type OnUpdateHandler = (data: any) => void;
export type OnOpenHandler = (event: WebSocket.OpenEvent) => void;
export type OnErrorHandler = (error: Error) => void;
export type OnCloseHandler = (event: WebSocket.CloseEvent) => void;

export type LiveQueryOptions = {
  list: string;
  apiKey?: string;
  options?: QueryOptions;
  baseUrl?: string;
  onOpen?: OnOpenHandler;
  onUpdate?: OnUpdateHandler;
  onError?: OnErrorHandler;
  onClose?: OnCloseHandler;
  maxRetries?: number;
  retryDelay?: number;
};

export interface QueryOptions {
  filter?: any;
  orderBy?: OrderBy;
  pageSize?: number;
  page?: number;
}

export type OrderBy = {
  [field: string]: 'asc' | 'desc';
};
