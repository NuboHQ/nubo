/** @jsx h */
import { h } from 'preact';
import { PageProps, Handlers } from '$fresh/server.ts';
import { ErrorPage } from '../components/pages/mod.ts';
import { BasicTemplate } from '../components/templates/mod.ts';
import { Page } from '@nubo-shared/pages/mod.ts';
import { config } from '@/config.ts';

export type PageData = {
  page: Page | null;
};

export const handler: Handlers<PageData> = {
  async GET(_, ctx) {
    try {
      const path = `/${ctx.params[0]}`;
      const response = await fetch(`${config.api.url}/page?path=${path}`);
      const result = await response.json();
      const page = result.data;

      return ctx.render({ page });
    } catch (error) {
      return ctx.render({ page: null });
    }
  },
};

export default function PageComponent(props: PageProps<PageData>) {
  if (props.data.page) {
    return <BasicTemplate page={props.data.page} />;
  }

  return <ErrorPage statusCode={404} message="Page not found" />;
}
