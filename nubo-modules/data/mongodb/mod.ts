import * as logger from '@nubo/logger/mod.ts';
import { DataModule } from '@nubo/data/types.ts';
import { connect } from './client.ts';

export const init = async () => {
  await connect();
  logger.info('Connected to MongoDB', ['data']);
};

export const mongodb: DataModule = {
  init,
};
