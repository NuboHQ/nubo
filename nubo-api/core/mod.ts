import { Application, Router, isHttpError, Status, logger } from '../deps.ts';
import { config } from '../config.ts';
import { graphql } from './graphql/mod.ts';
import { init as initRoot } from './routes/root/handlers.ts';
import { init as initPages } from './routes/pages/handlers.ts';

export const app = new Application();
export const router = new Router();

logger.init({ name: config.name });

export const server = async () => {
  app.use(async ({ response }, next) => {
    try {
      await next();
    } catch (error) {
      if (isHttpError(error)) {
        switch (error.status) {
          case Status.NotFound:
            break;
          default:
        }
      } else {
        response.body = {
          statusCode: 500,
          error: 'Internal Server Error',
          message: error.message || 'Unknown error',
        };
      }
    }
  });

  // routes
  app.use(router.routes());
  app.use(router.allowedMethods());

  initRoot(router);
  initPages(router);

  // graphql
  await graphql(app);

  // not found
  app.use(({ request, response }) => {
    response.status = 404;
    response.body = {
      statusCode: 404,
      error: 'Not Found',
      message: `Route ${request.method}:${request.url.pathname} not found`,
    };
  });

  const host = config.host;
  const port = config.port;

  logger.info(`http://${host}:${port}`);
  logger.info(`http://${host}:${port}/graphql`, ['graphql']);
  logger.success(`ready`);

  await app.listen({ port });
};
