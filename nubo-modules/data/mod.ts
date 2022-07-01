import config from '@nubo/config/mod.ts';
import { DataModule } from './types.ts';
import { postgres } from './postgres/mod.ts';

export { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

export let dataModule: DataModule | null = null;

if (config.data.type === 'postgresql') {
  dataModule = postgres;
}

if (!dataModule) {
  throw new Error(`Invalid data type: ${config.data.type}`);
}

export const data: DataModule = dataModule;
