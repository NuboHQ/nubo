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

## Authentication

Authentication to your data is done with an API key. You have two options.

### Option 1

Set the API key directly in the client.

```typescript
getSearchClient({
  apiKey: 'apik-xxxxx',
});
```

### Option 2

Set the API key with an environment variable. Choose one of the following, depending on your environment.

```
NUBO_API_KEY=apik-xxxxx
REACT_APP_NUBO_API_KEY=apik-xxxxx
NEXT_PUBLIC_NUBO_API_KEY=apik-xxxxx
```

> Make sure to use an API key with limited permissions, as this will be available in the browser.
