import { RouterContext } from '../../deps.ts';

export type NuboGraphqlOptions = {
  path?: string;
  types: string;
  // deno-lint-ignore no-explicit-any
  resolvers: any;
  playground?: boolean;
  // deno-lint-ignore no-explicit-any
  context?: <R extends string>(ctx: RouterContext<R>) => any;
};
