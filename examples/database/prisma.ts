import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import { PrismaClient } from './generated/client/deno/edge.ts';

export type { City, Log } from './generated/client/deno/edge.ts';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL'),
    },
  },
});
