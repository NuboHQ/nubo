import { Socket } from '../socket';
import { LiveQueryOptions } from '../types';

export const query = <T>(options: LiveQueryOptions<T>): Socket<T> => {
  const socket = new Socket(options);

  return socket;
};
