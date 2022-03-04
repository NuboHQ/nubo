export const config = {
  url: process.env['REACT_APP_NUBO_SEARCH_URL'] || 'https://search.nubo.app',
  apiKey:
    process.env['NUBO_API_KEY'] ||
    process.env['REACT_APP_NUBO_API_KEY'] ||
    process.env['NEXT_PUBLIC_NUBO_API_KEY'] ||
    '',
};
