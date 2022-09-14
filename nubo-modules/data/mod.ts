import config from '@nubo/config/mod.ts';
import { mongodb } from './mongodb/mod.ts';
import { postgres } from './postgres/mod.ts';
import { DataModule } from './types.ts';

export let dataModule: DataModule | null = null;

if (config.data.type === 'postgresql' || config.data.type === 'postgres') {
  dataModule = postgres;
}

if (config.data.type === 'mongodb') {
  dataModule = mongodb;
}

if (!dataModule) {
  throw new Error(`Invalid data type: ${config.data.type}`);
}

export const data: DataModule = dataModule;
