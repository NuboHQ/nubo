import { config } from '../config';
import { QueryOptions } from './types';

export const formatUrl = ({
  list,
  baseUrl,
  options = {},
}: {
  list: string;
  baseUrl?: string;
  options?: QueryOptions;
}) => {
  const encodedOptions = encodeURIComponent(JSON.stringify(options));

  return `${
    baseUrl || config.default.baseUrl
  }/live/lists/${list}?options=${encodedOptions}`;
};
