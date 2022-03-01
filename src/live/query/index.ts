import { Socket } from '../socket';
import { LiveQueryOptions } from '../types';

export const query = (options: LiveQueryOptions): Socket => {
  const socket = new Socket(options);

  return socket;
};
