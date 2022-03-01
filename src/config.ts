export const config = {
  default: {
    baseUrl:
      process.env.NUBO_BASE_URL ||
      process.env.NEXT_PUBLIC_NUBO_BASE_URL ||
      'wss://api.nubo.app',
  },
  apiKey: process.env.NUBO_API_KEY || process.env.NEXT_PUBLIC_NUBO_API_KEY,
};
