import { NuboResponse } from '../nubo.ts';

export default () => {
  return NuboResponse.json({ message: 'This is a test' });
};
