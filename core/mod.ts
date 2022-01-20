import { Application, Router, isHttpError, Status } from '../deps.ts';
import { NuboStartOptions } from './types.ts';

const app = new Application();
const router = new Router();
const DEFAULT_HOST: string = 'localhost';
const DEFAULT_PORT: number = parseInt(Deno.env.get('PORT') || '5555');

export class Nubo {
  public static router = router;

  public static start = async (options: NuboStartOptions = {}) => {
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

    app.use(router.routes());
    app.use(router.allowedMethods());

    app.use(({ request, response }) => {
      response.body = {
        message: `Route ${request.method}:${request.url.pathname} not found`,
        error: 'Not Found',
        statusCode: 404,
      };
    });

    const host = options.host || DEFAULT_HOST;
    const port = options.port || DEFAULT_PORT;

    console.log(`[nubo] http://${host}:${port}`);

    await app.listen(`${host}:${port}`);
  };
}
