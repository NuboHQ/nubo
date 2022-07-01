import 'https://deno.land/x/dotenv/load.ts';
import { logger } from './deps.ts';

const name = 'nubo-api';
const version = '0.0.1';
const secretKey = Deno.env.get('NUBO_SECRET_KEY') || '';

if (!secretKey) {
  logger.error('Missing environment variable: NUBO_SECRET_KEY');
  Deno.exit(1);
}

export const config = {
  name,
  version,
  port: parseInt(Deno.env.get('PORT') || '5001'),
  host: Deno.env.get('HOST') || 'localhost',
  secretKey,
};
