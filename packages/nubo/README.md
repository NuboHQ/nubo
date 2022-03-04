# Nubo

## Install

```
npm i nubo
```

## Usage

```typescript
import nubo from 'nubo';

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

const subscription = nubo.lists.subscribe<User>({
  list: 'users',
  options: {
    filter: { age: { $gt: 20 } },
    orderBy: {
      name: 'asc',
    },
    page: 1,
    pageSize: 25,
  },
  onUpdate: ({ items: users }) => {
    console.log(users);
  },
});
```
