import { Item } from '@nubo/data/types.ts';
import { Website } from '@nubo/websites/types.ts';

export interface Page extends Item {
  title: string;
  path: string;
  websiteId: string;
  template?: string;
  website: Website;
}

export type PagesOrder = {
  [K in keyof Page]: 'asc' | 'desc';
};
