import * as logger from '@nubo/logger/mod.ts';
import { createUniqueId } from '@nubo/utils/mod.ts';
import type {
  DataModule,
  Item,
  FindOptions,
  FindResult,
  FindOneOptions,
  AddOptions,
  UpdateOptions,
  RemoveOptions,
} from '@nubo/data/types.ts';
import { connect, getCollection } from './client.ts';
import {
  formatForDatabase,
  formatFromDatabase,
  getPagination,
  getPaging,
  getItems,
  getItemsWithCount,
} from './utils.ts';

export const init = async () => {
  await connect();

  logger.info('Connected to MongoDB', ['data']);
};

export const add = async <T extends Item>({
  name,
  data,
}: AddOptions<T>): Promise<T> => {
  const collection = getCollection(name);
  const id = data.id || createUniqueId();
  const created = new Date();
  const dataWithId = { id, created, updated: created, ...data };
  const formattedData = formatForDatabase(dataWithId);

  await collection.insertOne(formattedData);

  const newItem: T = await collection.findOne({
    _id: id,
  });
  const formattedNewItem = formatFromDatabase<T>(newItem);

  return formattedNewItem;
};

export const update = async <T extends Item>({
  name,
  filter,
  data,
}: UpdateOptions<T>): Promise<T | null> => {
  const collection = getCollection(name);
  const updated = new Date();
  const formattedFilter = formatForDatabase(filter);
  const formattedData = formatForDatabase({ ...data, updated });

  await collection.updateOne(formattedFilter, {
    $set: formattedData,
  });

  const item = await findOne<T>({ name, filter });

  return item;
};

export const find = async <T extends Item>({
  name,
  filter,
  pageSize,
  page,
  order,
}: FindOptions<T>): Promise<FindResult<T>> => {
  const collection = getCollection(name);
  const formattedFilter = formatForDatabase(filter || {});
  const formattedOrder = formatForDatabase(order);
  const paging = getPaging({ page, pageSize });
  // deno-lint-ignore no-explicit-any
  const options: any = { limit: paging.pageSize, skip: paging.startIndex };
  const { items, itemsTotal } = pageSize
    ? await getItemsWithCount({
        collection,
        filter: formattedFilter,
        order: formattedOrder,
        options,
      })
    : await getItems({
        collection,
        filter: formattedFilter,
        order: formattedOrder,
        options,
      });

  const pagination = getPagination({ itemsTotal, paging });
  const formattedItems = items.map(formatFromDatabase);

  return { items: formattedItems, pagination };
};

export const findOne = async <T extends Item>({
  name,
  filter,
}: FindOneOptions<T>) => {
  const collection = getCollection(name);
  const formattedFilter = formatForDatabase(filter || {});
  const item = await collection.findOne(formattedFilter);

  if (item) {
    const formattedItem = formatFromDatabase(item) as T;

    return formattedItem as T;
  }

  return null;
};

export const remove = async <T extends Item>({
  name,
  filter,
}: RemoveOptions<T>): Promise<boolean> => {
  const collection = getCollection(name);
  const formattedFilter = formatForDatabase(filter || {});
  const removedCount = await collection.deleteOne(formattedFilter);

  return !!removedCount;
};

export const mongodb: DataModule = {
  init,
  add,
  update,
  find,
  findOne,
  remove,
};
