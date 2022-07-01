import config from '@nubo/config/mod.ts';
import { DataModule } from './types.ts';

let dataModule: DataModule | null = null;

if (config.data.type === 'postgresql') {
  dataModule = await import('@nubo/data/postgres/mod.ts');
}

if (!dataModule) {
  throw new Error(`Invalid data type: ${config.data.type}`);
}

export const data: DataModule = dataModule;
