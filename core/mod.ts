import {
  Application,
  Router,
  isHttpError,
  Status,
  applyGraphQL,
} from '../deps.ts';
import { NuboStartOptions } from './types.ts';
import { NuboGraphqlOptions } from './graphql/types.ts';

const app = new Application();
const router = new Router();
const DEFAULT_HOST: string = 'localhost';
const DEFAULT_PORT: number = parseInt(Deno.env.get('PORT') || '5555');
const graphqlSettings = {
  enabled: false,
  path: '/graphql',
};

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
      response.status = 404;
      response.body = {
        message: `Route ${request.method}:${request.url.pathname} not found`,
        error: 'Not Found',
        statusCode: 404,
      };
    });

    const host = options.host || DEFAULT_HOST;
    const port = options.port || DEFAULT_PORT;

    console.log(`[nubo] http://${host}:${port}`);

    if (graphqlSettings.enabled) {
      console.log(
        `[nubo:graphql] http://${host}:${port}${graphqlSettings.path}`,
      );
    }

    await app.listen(`${host}:${port}`);
  };

  public static graphql = async (options: NuboGraphqlOptions) => {
    const path = options.path || '/graphql';
    const GraphQLService = await applyGraphQL<Router>({
      Router,
      path,
      typeDefs: options.types,
      resolvers: options.resolvers,
      usePlayground: options.playground || false,
      context: options.context,
    });

    app.use(GraphQLService.routes(), GraphQLService.allowedMethods());
    graphqlSettings.enabled = true;
    graphqlSettings.path = path;
  };
}
