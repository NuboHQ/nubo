import config from '@nubo/config/mod.ts';
import { createId } from '@nubo/utils/mod.ts';
import { MongoClient } from 'https://deno.land/x/mongo@v0.30.1/mod.ts';

const client = new MongoClient();
// deno-lint-ignore no-explicit-any
export let database: any;

export const connect = async () => {
  await client.connect(config.data.database.url);
  database = client.database(config.data.database.name);

  const users = database.collection('users');
  const insertId = await users.insertOne({
    _id: createId(),
    username: 'user1',
    password: 'pass1',
  });
  console.log('---');
  console.log(insertId);
  console.log('---');
};
