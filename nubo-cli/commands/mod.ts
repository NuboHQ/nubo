import { addSqlCommands } from './sql/mod.ts';

export const addCommands = (rootYargs: any) => {
  addSqlCommands(rootYargs);
};
