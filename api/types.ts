import type { Opine } from 'https://deno.land/x/opine@2.3.3/mod.ts';

export type NuboApiConfig = {
  port: number;
  region: string;
};

export interface NuboApi extends Opine {}
