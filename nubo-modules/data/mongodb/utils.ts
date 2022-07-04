import { omit } from '@nubo/utils/mod.ts';
import { flatten } from '@nubo/deps.ts';
import { Paging, Pagination } from '@nubo/data/types.ts';

// deno-lint-ignore no-explicit-any
export const formatForDatabase = <T>(data: any): T => {
  const _id = data.id;
  const itemWithoutId = omit(data, ['id']);
  const formattedData: T = { _id, ...itemWithoutId };

  return formattedData;
};

// deno-lint-ignore no-explicit-any
export const formatFromDatabase = <T>(data: any): T => {
  const id = data._id;
  const dataWithoutId = omit(data, ['_id']);
  const formattedData: T = { id, ...dataWithoutId };

  return formattedData;
};

export const getPaging = ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}): Paging => {
  page = page || 1;
  pageSize = pageSize || 25;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize - 1;

  return {
    page,
    pageSize,
    startIndex,
    endIndex,
  };
};

export const getPagination = ({
  itemsTotal,
  paging,
}: {
  itemsTotal: number;
  paging: Paging;
}): Pagination => {
  const pagesTotal = Math.ceil(itemsTotal / paging.pageSize) || 1;
  const firstPage = paging.page === 1;
  const lastPage = paging.page === pagesTotal;

  return {
    itemsTotal,
    pagesTotal,
    firstPage,
    lastPage,
    page: paging.page,
    pageSize: paging.pageSize,
  };
};

export const getItems = async ({
  collection,
  filter,
  options,
  order,
}: {
  // deno-lint-ignore no-explicit-any
  collection: any;
  // deno-lint-ignore no-explicit-any
  filter: any;
  // deno-lint-ignore no-explicit-any
  options: any;
  // deno-lint-ignore no-explicit-any
  order?: any;
}) => {
  let query = collection.find(filter, options);

  if (order) {
    const formattedOrder = formatOrder(order);

    query = query.sort(formattedOrder);
  }

  // deno-lint-ignore no-explicit-any
  const items: any[] = await query.toArray();

  return { items, itemsTotal: items.length };
};

export const getItemsWithCount = async ({
  collection,
  filter,
  options,
  order,
}: {
  // deno-lint-ignore no-explicit-any
  collection: any;
  // deno-lint-ignore no-explicit-any
  filter: any;
  // deno-lint-ignore no-explicit-any
  options: any;
  // deno-lint-ignore no-explicit-any
  order?: any;
}) => {
  let query = collection.find(filter, options);

  if (order) {
    const formattedOrder = formatOrder(order);

    query = query.sort(formattedOrder);
  }

  // deno-lint-ignore no-explicit-any
  const [itemsTotal, items]: any[] = await Promise.all([
    collection.countDocuments(filter),
    query.toArray(),
  ]);

  return { itemsTotal, items };
};

// deno-lint-ignore no-explicit-any
export const formatFilter = (filter: any): any => {
  let formattedFilter = { ...filter };

  if (filter && filter.id) {
    formattedFilter = omit({ ...formattedFilter, _id: filter.id }, ['id']);
  }

  for (const key in formattedFilter) {
    const value = formattedFilter[key];

    if (key === '_and') {
      // deno-lint-ignore no-explicit-any
      const formattedValue: any[] = [];

      // deno-lint-ignore no-explicit-any
      value.forEach((orValue: any) => {
        formattedValue.push(formatFilter(orValue));
      });
      delete formattedFilter[key];
      formattedFilter['$and'] = formattedValue;
    } else if (key === '_or') {
      // deno-lint-ignore no-explicit-any
      const formattedValue: any[] = [];

      // deno-lint-ignore no-explicit-any
      value.forEach((orValue: any) => {
        formattedValue.push(formatFilter(orValue));
      });
      delete formattedFilter[key];
      formattedFilter['$or'] = formattedValue;
    } else if (Array.isArray(value)) {
      formattedFilter[key] = { $in: value };
    } else if (typeof value === 'object') {
      // deno-lint-ignore no-explicit-any
      const flattenedValue: any = flatten({ [key]: value });

      delete formattedFilter[key];

      for (const flattenedKey in flattenedValue) {
        formattedFilter[flattenedKey] = flattenedValue[flattenedKey];
      }
    } else {
      formattedFilter[key] = value;
    }
  }

  return formattedFilter;
};

// deno-lint-ignore no-explicit-any
export const formatOrder = (order: any) => {
  // deno-lint-ignore no-explicit-any
  const formattedOrder: any = {};

  for (const key in order) {
    const value = order[key];

    if (typeof value === 'object') {
      // deno-lint-ignore no-explicit-any
      const flattenedValue: any = flatten({ [key]: value });

      for (const flattenedKey in flattenedValue) {
        formattedOrder[flattenedKey] =
          flattenedValue[flattenedKey] === 'desc' ? -1 : 1;
      }
    } else {
      formattedOrder[key] = value === 'desc' ? -1 : 1;
    }
  }

  return formattedOrder;
};
