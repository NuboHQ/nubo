const VERSION = '0.0.3';

export const config = {
  name: 'nubo',
  version: VERSION,
  cloudProvider: Deno.env.get('NUBO_CLOUD_PROVIDER') || 'unknown',
  region: Deno.env.get('NUBO_REGION') || 'unknown',
  location: Deno.env.get('NUBO_LOCATION') || 'unknown',
  service: {
    name: Deno.env.get('NUBO_SERVICE_NAME') || 'unknown',
  },
};
