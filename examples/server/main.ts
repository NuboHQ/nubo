import { serve } from 'https://deno.land/std@0.164.0/http/server.ts';

const port = 8080;

const handler = (request: Request): Response => {
  console.log('hello');

  return new Response(JSON.stringify([]), { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
