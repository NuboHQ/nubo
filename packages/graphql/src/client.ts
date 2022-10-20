import { createClient } from './generated/graphql-client';

export const client = createClient({
  url: 'http://localhost:5003/graphql',
});
