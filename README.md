# Nubo

## Install

```
npm install nubo
```

```
yarn add nubo
```

## Usage

```typescript
import { connect } from 'nubo';

const conn = connect({ url: 'nubo://...' });
const results = await conn.execute('SELECT * FROM users WHERE id=?', [1]);
console.log(results);
```

### Drizzle

```typescript
import { drizzle } from 'drizzle-orm/planetscale-serverless';

const connection = connect({ url: 'nubo://...' });
const db = drizzle(connection);
```
