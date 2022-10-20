const website = {
  url: import.meta.env.PUBLIC_NUBO_WEBSITE_URL || 'http://localhost:5000',
};

const api = {
  url: import.meta.env.PUBLIC_NUBO_API_URL || 'http://localhost:5003',
};

export const config = {
  secretKey: import.meta.env.SECRET_KEY || 'nubo',
  website,
  api,
};

export type ClientConfig = typeof config;
