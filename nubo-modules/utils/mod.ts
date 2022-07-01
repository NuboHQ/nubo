import { crypto } from 'https://deno.land/std@0.105.0/crypto/mod.ts';

export const createId = () => {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  throw new Error('createId is only available in secure contexts');
};
