import { NuboResponse } from 'nubo';

export const path = '/hello';

export default () => {
  return NuboResponse.json({ message: 'Hello from function!' });
};
