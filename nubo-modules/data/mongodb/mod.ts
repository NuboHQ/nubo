import * as logger from '@nubo/logger/mod.ts';
import { createUniqueId } from '@nubo/utils/mod.ts';
import type { DataModule, Item, ItemOrder } from '@nubo/data/types.ts';
import { connect, getCollection } from './client.ts';
import {
  formatForDatabase,
  formatFromDatabase,
  getPagination,
  getPaging,
  getItems,
  getItemsWithCount,
} from './utils.ts';
import { Result } from './types.ts';

export const init = async () => {
  await connect();

  logger.info('Connected to MongoDB', ['data']);
};

export const add = async <T extends Item>({
  name,
  data,
}: {
  name: string;
  data: Partial<T>;
}): Promise<T> => {
  const collection = getCollection(name);

  const id = data.id || createUniqueId();
  const created = new Date();
  const dataWithId = { id, created, updated: created, ...data };
  const formattedData = formatForDatabase(dataWithId);

  await collection.insertOne(formattedData);

  const newItem: T = await collection.findOne({
    _id: id,
  });

  return newItem;
};

export const find = async <T extends Item>({
  name,
  filter,
  pageSize,
  page,
  order,
}: {
  name: string;
  filter?: Partial<T>;
  pageSize?: number;
  page?: number;
  order?: ItemOrder<Partial<T>>;
}): Promise<Result<T>> => {
  const collection = getCollection(name);
  const formattedFilter = formatForDatabase(filter || {});
  const paging = getPaging({ page, pageSize });
  // deno-lint-ignore no-explicit-any
  const options: any = { limit: paging.pageSize, skip: paging.startIndex };
  const { items, itemsTotal } = pageSize
    ? await getItemsWithCount({
        collection,
        filter: formattedFilter,
        order,
        options,
      })
    : await getItems({
        collection,
        filter: formattedFilter,
        order,
        options,
      });

  const pagination = getPagination({ itemsTotal, paging });
  const formattedItems = items.map(formatFromDatabase);

  return { items: formattedItems, pagination };
};

export const mongodb: DataModule = {
  init,
  add,
};
