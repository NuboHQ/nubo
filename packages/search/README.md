# Nubo UI - Search

```
npm i @nubo-ui/search
```

## Usage

```tsx
import {
  getSearchClient,
  Hits,
  InstantSearch,
  SearchBox,
} from '@nubo-ui/search';

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
