import * as logger from '@nubo/logger/mod.ts';
import { DataModule } from '@nubo/data/types.ts';
import { connect, database } from './client.ts';

import { Model, DataTypes } from '@nubo/data/mod.ts';

class Website extends Model {
  static table = 'website';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true },
    name: DataTypes.STRING,
    domains: DataTypes.JSONB,
  };
}

export const init = async () => {
  connect();
  await setup();
  logger.info('Connected to Postgres', ['data']);
};

export const setup = async () => {
  database.link([Website]);
  await database.sync({ drop: false });
};

// tables
export const postgres: DataModule = {
  init,
};
