import { config } from '@nubojs/config';
import { isServer } from '@nubojs/utils';
import { createClient } from './generated/graphql-client';

export const client = createClient({
  url: `${config.api.url}/graphql`,
  headers: {
    ...(isServer() && { 'nubo-secret-key': config.secretKey }),
  },
  credentials: 'include',
});
