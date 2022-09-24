import React from 'react';

export { Page };

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        Demo using{' '}
        <code className="bg-gray-200 py-1 px-2 rounded-md">
          vite-plugin-ssr
        </code>
        .
      </p>
    </>
  );
}
