import { NuboSubscription } from './subscription';
import { NuboSubscriptionOptions } from './types';

export const subscribe = <T>(
  options: NuboSubscriptionOptions<T>
): NuboSubscription<T> => {
  return new NuboSubscription(options);
};
