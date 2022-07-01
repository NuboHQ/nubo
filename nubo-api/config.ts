import 'https://deno.land/x/dotenv/load.ts';

const name = 'nubo-api';
const version = '0.0.1';
const secretKey = Deno.env.get('NUBO_SECRET_KEY') || '';

if (!secretKey) {
  throw new Error('Missing environment variable: NUBO_SECRET_KEY');
}

export const config = {
  name,
  version,
  port: parseInt(Deno.env.get('PORT') || '5001'),
  host: Deno.env.get('HOST') || 'localhost',
  secretKey,
};
