# Nubo

Nubo is a platform for deploying and managing TypeScript applications.
<br/>
Visit [nubo.app](https://nubo.app) for more information.
<br/>
<br/>

## Getting Started

First sign up for a free account at [nubo.app](https://nubo.app), then install the Nubo client library with npm.

```
npm i nubo
# or
yarn add nubo
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
  apiKey: 'apik-xxxxx',
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

## Authentication

Authentication to your data is done with an API key. You have two options.

### Option 1

Set the API key directly in the client.

```typescript
nubo.lists.subscribe<User>({
  apiKey: 'apik-xxxxx',
});
```

### Option 2

Set the API key with an environment variable. Choose one of the following, depending on your environment.

```
NUBO_API_KEY=apik-xxxxx
REACT_APP_NUBO_API_KEY=apik-xxxxx
NEXT_PUBLIC_NUBO_API_KEY=apik-xxxxx
```
