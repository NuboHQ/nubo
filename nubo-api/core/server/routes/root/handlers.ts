import { Router } from '@/deps.ts';
import { config } from '@/config.ts';

export const init = (router: Router) => {
  router.get('/', ({ response }) => {
    response.body = { name: config.name };
  });
};
