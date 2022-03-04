import { config } from '../config';
import { NuboQueryOptions } from './types';

export const formatUrl = <T>({
  list,
  baseUrl,
  options = {},
}: {
  list: string;
  baseUrl?: string;
  options?: NuboQueryOptions<T>;
}) => {
  const encodedOptions = encodeURIComponent(JSON.stringify(options));

  return `${
    baseUrl || config.baseUrl
  }/subscriptions/lists/${list}?options=${encodedOptions}`;
};
