import { Router, logger } from '../../../deps.ts';
import { config } from '../../../config.ts';

export const rootHandler = (router: Router) => {
  logger.info('hello');
  router.get('/', ({ response }) => {
    response.body = { name: config.name };
  });
};
