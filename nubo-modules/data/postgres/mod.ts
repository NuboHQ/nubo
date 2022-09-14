import type {
  AddOptions,
  DataModule,
  FindOneOptions,
  FindOptions,
  FindResult,
  Item,
  RemoveOptions,
  UpdateOptions,
} from '@nubo/data/types.ts';
import * as logger from '@nubo/logger/mod.ts';
import { createUniqueId } from '@nubo/utils/mod.ts';
import { client } from './client.ts';
import {
  formatForDatabase,
  formatFromDatabase,
  getItems,
  getItemsWithCount,
  getPagination,
  getPaging,
} from './utils.ts';

export const init = async () => {
  await client.connect();
  logger.info('Connected to Postgres', ['data']);

  const array_result = await client.queryArray('SELECT * FROM users');
  console.log(array_result.rows);
};

export const add = async <T extends Item>({
  name,
  data,
}: AddOptions<T>): Promise<T> => {
  return {} as T;
};

export const update = async <T extends Item>({
  name,
  filter,
  data,
}: UpdateOptions<T>): Promise<T | null> => {
  return {} as T;
};

export const find = async <T extends Item>({
  name,
  filter,
  pageSize,
  page,
  order,
}: FindOptions<T>): Promise<FindResult<T>> => {
  return {} as T;
};

export const findOne = async <T extends Item>({
  name,
  filter,
}: FindOneOptions<T>) => {
  return null;
};

export const remove = async <T extends Item>({
  name,
  filter,
}: RemoveOptions<T>): Promise<boolean> => {
  return false;
};

export const postgres: DataModule = {
  init,
  add,
  update,
  find,
  findOne,
  remove,
};
