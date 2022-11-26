import { NuboRoute } from '../types';

export default [
  { id: 'home', path: '/', method: 'GET', source: 'main.nubo' },

  {
    id: 'products',
    path: '/products',
    method: 'ALL',
    source: 'main.nubo',
  },

  {
    id: 'product',
    path: '/products/:productId',
    method: 'GET',
    source: 'main.nubo',
  },

  // { id: 'error', path: '*', method: 'ALL', file: 'error.nubo' },

  // { id: 'not-found', path: '*', method: 'ALL', file: 'not-found.nubo' },
] as NuboRoute[];
