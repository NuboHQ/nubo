import config from '@nubo/config/mod.ts';
import { Client } from 'https://deno.land/x/postgres@v0.16.1/mod.ts';

export const client = new Client(config.data.database.url);
