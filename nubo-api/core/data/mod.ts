import { databaseConfig } from '@/core/data/config.ts';
import { postgres } from '@/core/data/postgres/mod.ts';
import { DataModule } from './types.ts';

let module;

if (databaseConfig.type === 'postgresql') {
  module = postgres;
}

if (!module) {
  throw new Error(`Invalid database type: ${databaseConfig.type}`);
}

export const data: DataModule = module;
