import { server } from '@/server/mod.ts';
import { data } from '@nubo/data/mod.ts';

// modules
await data.init();

// server
await server();
