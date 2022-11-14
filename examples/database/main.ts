import { serve } from 'https://deno.land/std@0.140.0/http/server.ts';
import { PrismaClient } from './generated/client/deno/edge.ts';

const prisma = new PrismaClient();

async function handler(request: Request) {
  const log = await prisma.log.create({
    data: {
      level: 'Info',
      message: `${request.method} ${request.url}`,
      meta: {
        headers: JSON.stringify(request.headers),
      },
    },
  });
  const body = JSON.stringify(log, null, 2);
  return new Response(body, {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

serve(handler);

// import { Application } from 'https://deno.land/x/oak/mod.ts';

// const app = new Application();
// const port = parseInt(Deno.env.get('PORT') || '3000');

// app.use((ctx) => {
//   console.log(ctx.request.headers);
//   ctx.response.body = 'My Oak Server';
// });

// console.log(`http://localhost:${port}`);

// await app.listen({ port });
