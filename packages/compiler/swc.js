const { parse } = require('@swc/core');
const fs = require('fs');

const [path] = process.argv.slice(2);
const code = fs.readFileSync(path, 'utf-8');

(async () => {
  const parsed = await parse(code, {
    syntax: 'typescript',
    comments: false,
    target: 'es2022',
  });

  const result = { exports: [] };

  parsed.body.forEach((declaration) => {
    // if (declaration.type === 'ImportDeclaration') {
    //   console.log(JSON.stringify(declaration));
    // }

    if (declaration.type === 'ExportDeclaration') {
      const exportName = declaration.declaration.declarations[0].id.value;

      const properties =
        declaration.declaration.declarations[0].init.properties;

      const props = properties.map((property) => property.value);

      result.exports.push({ name: exportName, props });
    }
  });

  console.log('---');
  console.log(JSON.stringify(result));
  console.log('---');
})();
