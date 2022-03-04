export const config = {
  baseUrl:
    process.env['NUBO_BASE_URL'] ||
    process.env['NEXT_PUBLIC_NUBO_BASE_URL'] ||
    'https://api-europe-west.nubo.app',
  subscription: {
    baseUrl:
      process.env['NUBO_LIVE_BASE_URL'] ||
      process.env['NEXT_PUBLIC_NUBO_LIVE_BASE_URL'] ||
      'wss://api-europe-west.nubo.app',
  },
  apiKey:
    process.env['NUBO_API_KEY'] || process.env['NEXT_PUBLIC_NUBO_API_KEY'],
};
