import { NuboResponse } from '../response';
import { NuboContext, NuboFunctionConfig } from './types';

export default (context: NuboContext) => {
  return NuboResponse.json({
    message: `Hello from edge function in ${context.region}`,
  });
};

export const config: NuboFunctionConfig = {
  path: '/hello',
};
