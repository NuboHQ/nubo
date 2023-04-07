import { connect as dbConnect } from '@planetscale/database';
import fetch from 'node-fetch';
import https from 'https';

export type NuboConnectOptions = {
  url?: string;
};

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export const connect = (options?: NuboConnectOptions) => {
  const nuboUrl = options?.url || process.env.DATABASE_URL;

  if (!nuboUrl) throw new Error('Missing database url');

  const dbUrl = new URL(nuboUrl);
  const apiKey = dbUrl.username;

  if (dbUrl.protocol !== 'nubo:')
    throw new Error('Invalid database URL. Must begin with "nubo://..."');

  const url = `https://${apiKey}@data.nubo.global/sql`;

  return dbConnect({
    fetch: async (input, init) => {
      return fetch(input, {
        ...init,
        agent,
      });
    },
    url,
  });
};