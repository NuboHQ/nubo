import { NuboApiConfig } from './types.ts';

export const config: NuboApiConfig = {
  port: parseInt(Deno.env.get('PORT') || '5000'),
  region: Deno.env.get('NUBO_REGION') || 'dev',
};
