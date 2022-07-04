import '@nubo/data/mod.ts';
import { config } from '@nubo/config/mod.ts';
import * as logger from '@nubo/logger/mod.ts';
import { graphql } from '@/server/graphql/mod.ts';
import { Application, isHttpError, Status } from '@/deps.ts';

logger.init({ name: 'nubo-api' });

export const app = new Application();

const PUBLIC_ROUTES: string[] = [];

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
    if (PUBLIC_ROUTES.includes(request.url.pathname)) {
      await next();

      return;
    }

    const secretKey =
      request.headers.get('x-nubo-secret-key') ||
      request.url.searchParams.get('secretKey');

    if (secretKey === config.secretKey) {
      await next();

      return;
    }

    response.status = 401;
    response.body = {
      statusCode: 401,
      error: 'Unauthorized',
      message: 'Access denied',
    };
  });

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

  logger.info(`http://${config.host}:${config.port}`);
  logger.info(`http://${config.host}:${config.port}/graphql`, ['graphql']);
  logger.success(`ready`);

  await app.listen({ port: config.port });
};
