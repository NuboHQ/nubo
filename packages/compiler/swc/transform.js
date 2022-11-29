// ---------------------------------------------------------------------------------
// NOTE:  This file for testing purposes only. SWC is called directly from compiler.
// ---------------------------------------------------------------------------------

const { transform } = require('@swc/core');
const fs = require('fs');

const [path] = process.argv.slice(2);
const code = fs.readFileSync(path, 'utf-8');

(async () => {
  const result = await transform(code, {
    // Some options cannot be specified in .swcrc
    filename: 'transformed.js',
    sourceMaps: false,

    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: true,
      },
      transform: {},
    },
  });

  console.log('---');
  console.log(result.code);
  console.log('---');
})();
