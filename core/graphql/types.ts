import { RouterContext } from '../../deps.ts';

export type NuboGraphqlOptions = {
  path?: string;
  types: string;
  resolvers: any;
  playground?: boolean;
  context?: <R extends string>(ctx: RouterContext<R>) => any;
};
