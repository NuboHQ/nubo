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
  return dbConnect({
    fetch: async (input, init) => {
      return fetch(input, {
        ...init,
        agent,
      });
    },
    url: options?.url || process.env.DATABASE_URL,
  });
};
