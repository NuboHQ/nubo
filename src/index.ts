import { connect as dbConnect, Config } from '@planetscale/database';

export type NuboConnectOptions = {
  url?: string;
  host?: string;
  fetch?: Config['fetch'];
};

export const connect = (options?: NuboConnectOptions) => {
  const nuboUrl = options?.url || process.env.DATABASE_URL;

  if (!nuboUrl) throw new Error('Missing database url');

  const dbUrl = new URL(nuboUrl);
  const apiKey = dbUrl.username;

  if (dbUrl.protocol !== 'nubo:') {
    throw new Error('Invalid database URL. Must begin with "nubo://..."');
  }

  const host = options?.host || dbUrl.host;
  const url = `https://${apiKey}@${host}/sql`;

  return dbConnect({
    ...(options?.fetch && { fetch: options.fetch }),
    url,
  });
};
