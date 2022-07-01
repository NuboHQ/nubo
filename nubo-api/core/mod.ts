import { Application, Router, isHttpError, Status, logger } from '@/deps.ts';
import { config } from '@/config.ts';
import { graphql } from '@/core/server/graphql/mod.ts';
import { init as initRoot } from '@/core/server/routes/root/handlers.ts';
import { init as initPages } from '@/core/server/routes/pages/handlers.ts';
import '@/core/data/mod.ts';

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

  app.use(async ({ request, response }, next) => {
    if (request.headers.get('x-nubo-secret-key') === config.secretKey) {
      await next();
    } else {
      response.status = 401;
      response.body = {
        statusCode: 401,
        error: 'Unauthorized',
        message: 'Invalid API key',
      };
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
