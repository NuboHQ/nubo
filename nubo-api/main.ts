import { server } from '@/core/mod.ts';
import { data } from '@/core/data/mod.ts';

await data.init();
await server();
