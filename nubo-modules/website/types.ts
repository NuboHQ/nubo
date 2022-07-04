import { Item } from '@nubo/data/types.ts';

export interface Website extends Item {
  name: string;
  domains: string[];
}
