const website = {
  url: process.env['PUBLIC_NUBO_WEBSITE_URL'] || 'http://localhost:5000',
};

const api = {
  allowedUrls: [website.url],
  url: process.env['PUBLIC_NUBO_API_URL'] || 'http://localhost:5003',
};

export const config = {
  secretKey: process.env['SECRET_KEY'] || 'nubo',
  website,
  api,
};

export type ServerConfig = typeof config;
