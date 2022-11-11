import 'dotenv/config';

export const config = {
  port: parseInt(process.env['PORT'] || '5000'),
  secretKey: process.env['NUBO_SECRET_KEY'] || '',
};

export type ServerConfig = typeof config;
