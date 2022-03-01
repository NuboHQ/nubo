import { NuboConnection } from '../connection';
import { LiveQueryOptions } from '../types';

export const query = <T>(options: LiveQueryOptions<T>): NuboConnection<T> => {
  return new NuboConnection(options);
};
