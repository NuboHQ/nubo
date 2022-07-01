import { Client } from 'https://deno.land/x/postgres@v0.16.1/mod.ts';
import config from '@nubo/config/mod.ts';
import * as logger from '@nubo/logger/mod.ts';
import { DataModule } from '@nubo/data/types.ts';

export const client = new Client(config.data.url);

export const init = async () => {
  await client.connect();
  logger.info('Connected to Postgres', ['data']);
};

export const setup = async () => {};

export const postgres: DataModule = {
  init,
};
