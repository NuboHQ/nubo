import {
  connectHits,
  connectSearchBox,
  getSearchClient,
  InstantSearch,
} from '@nubo-ui/search';

const searchClient = getSearchClient({
  apiKey: 'apik-72c65de59d85fed57a7cc42ccbca9518cad19a63e7cc6167d6',
});

const ItemsWithHits = connectHits(({ hits }) => {
  return (
    <div style={{ padding: 20, paddingLeft: 50 }}>
      {hits.map((hit) => {
        return (
          <div key={hit.id} style={{ padding: 5 }}>
            {hit.name}
          </div>
        );
      })}
    </div>
  );
});

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
  return (
    <>
      <input
        style={{ border: '1px solid #e5e5e5', padding: 4 }}
        value={currentRefinement}
        tabIndex={1}
        onChange={(event: any) => {
          const value = event.currentTarget.value;

          refine(value);
        }}
      />

      {currentRefinement && <ItemsWithHits />}
    </>
  );
});

export function Index() {
  return (
    <InstantSearch indexName="companies" searchClient={searchClient}>
      <SearchBox />
    </InstantSearch>
  );
}

export default Index;
