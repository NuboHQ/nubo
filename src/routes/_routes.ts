import { NuboRoute } from '../types';

export default [
  { path: '/', method: 'GET', file: 'main.nubo' },

  { path: '/products', method: 'GET', file: 'main.nubo' },

  { path: '/products/:productId', method: 'GET', file: 'main.nubo' },

  { path: 'error', method: 'GET', file: 'error.nubo' },

  { path: 'not-found', method: 'GET', file: 'not-found.nubo' },
] as NuboRoute[];
