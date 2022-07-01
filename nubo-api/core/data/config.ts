import { config } from '@/config.ts';

export type DatabaseConfig = {
  type: string;
  user: string;
  password: string;
  host: string;
  port: number;
  database: string;
  options: string | null;
};

export const getDatabaseConfig = (url: string): DatabaseConfig => {
  const parsedUrl = new URL(url);

  return {
    type: parsedUrl.protocol.split(':')[0],
    user: parsedUrl.username,
    password: parsedUrl.password,
    host: parsedUrl.hostname,
    port: parseInt(parsedUrl.port),
    database: parsedUrl.pathname.split('/')[1],
    options: parsedUrl.searchParams.get('options') || null,
  };
};

export const databaseConfig = getDatabaseConfig(config.database.url);
