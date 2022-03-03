import {
  getSearchClient,
  Hits,
  InstantSearch,
  SearchBox,
} from '@nubo-ui/search';

const searchClient = getSearchClient({
  apiKey: 'apik-72c65de59d85fed57a7cc42ccbca9518cad19a63e7cc6167d6',
});

export function App() {
  return (
    <InstantSearch indexName="companies" searchClient={searchClient}>
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}

export default App;
