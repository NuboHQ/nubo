import WebSocket from 'isomorphic-ws';
import { config } from '../config';
import {
  LiveQueryOptions,
  OnCloseHandler,
  OnErrorHandler,
  OnOpenHandler,
  OnUpdateHandler,
  QueryOptions,
} from './types';
import { formatUrl } from './utils';

export class NuboConnection<T> {
  list: string;
  apiKey: string | null = null;
  baseUrl: string = config.default.baseUrl;
  options: QueryOptions<T> = {};
  socket: WebSocket | null = null;
  onOpenHandler: OnOpenHandler | null = null;
  onUpdateHandler: OnUpdateHandler<T> | null = null;
  onErrorHandler: OnErrorHandler | null = null;
  onCloseHandler: OnCloseHandler | null = null;
  maxRetries: number = 0;
  retries: number = 0;
  retryDelay: number = 0;
  closed: boolean = false;

  constructor({
    list,
    apiKey,
    baseUrl,
    options,
    onUpdate,
    onOpen,
    onError,
    onClose,
    maxRetries = 3,
    retryDelay = 2000,
  }: LiveQueryOptions<T>) {
    this.onOpenHandler = onOpen || null;
    this.onUpdateHandler = onUpdate || null;
    this.onErrorHandler = onError || null;
    this.onCloseHandler = onClose || null;
    this.list = list;
    this.apiKey = apiKey || config.apiKey || null;
    this.maxRetries = maxRetries;
    this.retryDelay = retryDelay;
    this.options = options || {};

    if (!this.apiKey) {
      throw new Error('Missing API key');
    }

    if (baseUrl) {
      this.baseUrl = baseUrl;
    }

    this.connect();
  }

  public connect() {
    const url = formatUrl<T>({
      list: this.list,
      baseUrl: this.baseUrl,
      options: this.options,
    });

    this.socket = new WebSocket(url, [this.apiKey]);

    this.socket.onopen = this.onOpen.bind(this);
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onerror = this.onError.bind(this);
    this.socket.onclose = this.onClose.bind(this);
  }

  public close() {
    this.closed = true;

    if (this.socket) {
      this.socket.close();
    }
  }

  private onOpen(event: WebSocket.OpenEvent) {
    this.retries = 0;

    if (this.onOpenHandler) {
      this.onOpenHandler(event);
    }
  }

  private onMessage(event: WebSocket.MessageEvent) {
    try {
      const dataString: string = event.data as string;
      const data = JSON.parse(dataString);

      if (this.onUpdateHandler) {
        this.onUpdateHandler(data);
      }
    } catch (error) {}
  }

  private onError(event: WebSocket.ErrorEvent) {
    if (this.onErrorHandler) {
      this.onErrorHandler(event.error);
    }
  }

  private onClose(event: WebSocket.CloseEvent) {
    if (this.onCloseHandler) {
      this.onCloseHandler(event);
    }

    if (!this.closed) {
      this.reconnect();
    }
  }

  private reconnect() {
    if (this.retries !== this.maxRetries) {
      setTimeout(() => {
        this.connect();
      }, this.retryDelay);
      this.retries++;
    } else {
      if (this.onErrorHandler) {
        this.onErrorHandler(
          new Error(
            `Unable to reconnect after ${this.retries} attempt${
              this.retries === 1 ? '' : 's'
            }`
          )
        );
      }
    }
  }
}
