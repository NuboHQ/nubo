import config from '@nubo/config/mod.ts';
import { Database, PostgresConnector } from 'https://deno.land/x/denodb/mod.ts';

export let database: Database;

export const connect = () => {
  const connector = new PostgresConnector({
    // verify-full is not supported with this connector
    uri: config.data.url.replace('verify-full', 'require'),
  });

  database = new Database(connector);
};
