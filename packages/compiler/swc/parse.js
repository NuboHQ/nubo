const { parse } = require('@swc/core');
const fs = require('fs');

const [path] = process.argv.slice(2);
const code = fs.readFileSync(path, 'utf-8');

(async () => {
  const parsed = await parse(code, {
    syntax: 'typescript',
    comments: false,
    target: 'es2022',
    tsx: true,
  });

  const result = { exports: [] };

  parsed.body.forEach((declaration) => {
    if (declaration.type === 'ExportDeclaration') {
      const exportName = declaration.declaration.declarations[0].id.value;

      if (
        declaration.declaration.declarations[0].init.type === 'ObjectExpression'
      ) {
        const properties =
          declaration.declaration.declarations[0].init.properties;

        console.log(declaration.declaration.declarations[0]);

        const props = properties.map((property) => property.value);

        result.exports.push({ name: exportName, props });
      }
    } else {
      console.log('something else');
    }
  });

  console.log('---');
  console.log(JSON.stringify(result));
  console.log('---');
})();
