# Nubo

## Nubo Edge Functions

```typescript
// functions/hello.ts

import { NuboContext } from 'nubo';

export const path = '/';

export const handler = () => {
  return {
    message: `Hello from Nubo Edge Function in ${process.env.NUBO_REGION}`,
  };
};
```
