import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import { nuboCli } from '@/nubo-cli/mod.ts';

if (import.meta.main) {
  nuboCli();
}
