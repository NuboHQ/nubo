import { NuboRoute } from '../types';

export default [
  { id: 'home', path: '/', method: 'GET', file: 'main.nubo' },

  {
    id: 'products',
    path: '/products',
    method: 'ALL',
    file: 'main.nubo',
  },

  {
    id: 'product',
    path: '/products/:productId',
    method: 'GET',
    file: 'main.nubo',
  },

  // { id: 'error', path: '*', method: 'ALL', file: 'error.nubo' },

  // { id: 'not-found', path: '*', method: 'ALL', file: 'not-found.nubo' },
] as NuboRoute[];
