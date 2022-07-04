import { uniqueString } from '@nubo/deps.ts';

export const createUniqueId = (length = 25) => {
  return uniqueString(length).toLowerCase();
};

export const omit = <T>(value: T, fields: string[]): T => {
  // deno-lint-ignore no-explicit-any
  const object: any = {};

  for (const key in value) {
    if (!fields.includes(key)) {
      object[key] = value[key];
    }
  }

  return object as T;
};

export const pick = <T>(value: T, fields: string[]): T => {
  // deno-lint-ignore no-explicit-any
  const object: any = {};

  for (const key in value) {
    if (fields.includes(key)) {
      object[key] = value[key];
    }
  }

  return object as T;
};
