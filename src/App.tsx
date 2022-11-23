import { FC, useState } from 'react';

export const App: FC = () => {
  const [count, setCount] = useState(5);

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1 style={{ fontFamily: 'sans-serif' }}>{count}</h1>
      <br />
      <br />
      <button
        style={{ marginLeft: 10, marginRight: 10 }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>

      <button
        style={{ marginLeft: 10, marginRight: 10 }}
        onClick={() => setCount(0)}
      >
        0
      </button>

      <button
        style={{ marginLeft: 10, marginRight: 10 }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};
