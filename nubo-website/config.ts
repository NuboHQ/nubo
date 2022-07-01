const VERSION = '0.0.1';

const apiUrl = Deno.env.get('NUBO_API_URL') || 'http://localhost:5001';

export const config = {
  name: 'nubo-website',
  version: VERSION,
  port: parseInt(Deno.env.get('PORT') || '5000'),
  host: Deno.env.get('HOST') || 'localhost',
  api: {
    url: apiUrl,
    graphql: `${apiUrl}/graphql`,
    secretKey: Deno.env.get('NUBO_SECRET_KEY') || '',
  },
};
