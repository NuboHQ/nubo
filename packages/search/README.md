# Nubo UI - Search

```
npm i @nubo-ui/search react-instantsearch-dom @meilisearch/instant-meilisearch
```

## Usage

```tsx
import { getSearchClient } from '@nubo-ui/search';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';

const searchClient = getSearchClient({
  apiKey: 'apik-...',
});

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="users">
    <SearchBox />
    <Hits />
  </InstantSearch>
);
```
