import config from '@nubo/config/mod.ts';
import { MongoClient } from 'https://deno.land/x/mongo@v0.30.1/mod.ts';

const client = new MongoClient();
// deno-lint-ignore no-explicit-any
export let database: any;

export const connect = async () => {
  await client.connect(config.data.database.url);
  database = client.database(config.data.database.name);
};

export const getCollection = (name: string) => {
  return database.collection(name);
};
