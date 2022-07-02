import { uniqueString } from 'https://deno.land/x/uniquestring/mod.ts';

export const createId = (length = 25) => {
  return uniqueString(length);
};
