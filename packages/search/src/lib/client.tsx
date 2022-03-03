import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { config } from '..';

export const getSearchClient = ({
  apiKey,
  url,
}: {
  apiKey: string;
  url?: string;
}) => {
  return instantMeiliSearch(url || config.url, apiKey);
};
