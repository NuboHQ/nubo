import { Client } from 'https://deno.land/x/postgres@v0.16.1/mod.ts';
import { databaseConfig } from '@/core/data/config.ts';

export const getClient = () => {
  const client = new Client({
    user: databaseConfig.user,
    password: databaseConfig.password,
    database: databaseConfig.database,
    hostname: databaseConfig.host,
    port: databaseConfig.port,
    options: databaseConfig.options || undefined,
  });

  return client;
};
