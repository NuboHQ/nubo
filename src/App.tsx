import { FC, useState } from 'react';

interface Props {
  value?: string;
}

export const App: FC<Props> = ({ value }) => {
  const [count, setCount] = useState(5);

  return (
    <div
      style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: 100 }}
    >
      <h1>Count {count}</h1>
      <br />
      <div>Value: {value}</div>
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
