import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

const secretKey = Deno.env.get('NUBO_SECRET_KEY') || '';
const databaseUrl = Deno.env.get('DATABASE_URL') || '';
const databaseName = Deno.env.get('DATABASE_NAME') || 'nubo';

if (!secretKey) {
  throw new Error('Missing environment variable: NUBO_SECRET_KEY');
}

if (!databaseUrl) {
  throw new Error('Missing environment variable: DATABASE_URL');
}

export const config = {
  port: parseInt(Deno.env.get('PORT') || '5000'),
  host: Deno.env.get('HOST') || 'localhost',
  secretKey,
  data: {
    type: Deno.env.get('NUBO_DATA_TYPE') || 'postgres',
    database: {
      url: databaseUrl,
      name: databaseName,
    },
  },
  graphql: {
    playground: Deno.env.get('GRAPHQL_PLAYGROUND') === 'true' ? true : false,
  },
};

export default config;
