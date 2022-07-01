import { Client } from 'https://deno.land/x/postgres@v0.16.1/mod.ts';
import { logger } from '@/deps.ts';
import { DataModule } from '@/core/data/types.ts';
import { getClient } from './client.ts';

export let client: Client | null;

export const init = async () => {
  client = getClient();
  await client.connect();

  logger.info('Connected to Postgres', ['data']);
};

export const postgres: DataModule = {
  init,
};
