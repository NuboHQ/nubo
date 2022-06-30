const VERSION = '0.0.1';

export const config = {
  name: 'nubo-website',
  version: VERSION,
  port: parseInt(Deno.env.get('PORT') || '5000'),
  host: Deno.env.get('HOST') || 'localhost',
  api: {
    url: Deno.env.get('NUBO_API_URL') || 'http://localhost:5001',
  },
};
