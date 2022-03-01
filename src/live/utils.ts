import { config } from '../config';
import { QueryOptions } from './types';

export const formatUrl = <T>({
  list,
  baseUrl,
  options = {},
}: {
  list: string;
  baseUrl?: string;
  options?: QueryOptions<T>;
}) => {
  const encodedOptions = encodeURIComponent(JSON.stringify(options));

  return `${
    baseUrl || config.default.baseUrl
  }/live/lists/${list}?options=${encodedOptions}`;
};
