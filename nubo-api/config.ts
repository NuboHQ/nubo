const VERSION = '0.0.1';

export const config = {
  name: 'nubo-api',
  version: VERSION,
  port: parseInt(Deno.env.get('PORT') || '5001'),
  host: Deno.env.get('HOST') || 'localhost',
};
