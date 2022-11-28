const parser = require('@typescript-eslint/parser');
const fs = require('fs');

const [path] = process.argv.slice(2);
const code = fs.readFileSync(path, 'utf-8');

// const code = `
// export const props = { product, something, other };
// export const config = { path: '/products/:productId' };
// `;

const parsed = parser.parse(code, {
  sourceType: 'module',
  allowAwaitOutsideFunction: true,
  allowReturnOutsideFunction: true,
  allowUndeclaredExports: true,
  allowImportExportEverywhere: true,
});

const result = { exports: [] };

parsed.body.forEach((declaration) => {
  if (declaration.type === 'ImportDeclaration') {
    // console.log(JSON.stringify(declaration));
  }
  if (declaration.type === 'ExportNamedDeclaration') {
    const exportName = declaration.declaration.declarations[0].id.name;
    const properties = declaration.declaration.declarations[0].init.properties;
    console.log(exportName);
    const props = properties.map((property) => property.key.name);

    result.exports.push({ name: exportName, props });
  }
});

console.log('---');
console.log(JSON.stringify(result));
console.log('---');
