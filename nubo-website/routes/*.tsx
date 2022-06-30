/** @jsx h */
import { h } from 'preact';
import { PageProps, Handlers } from '$fresh/server.ts';
import { ErrorPage } from '../components/pages/mod.ts';
import { BasicTemplate } from '../components/templates/mod.ts';
import { Page } from '@nubo-shared/pages/mod.ts';

export type PageData = {
  page: Page | null;
};

const pages: { [key: string]: Page } = {
  '/': { title: 'Home' },
};

export const handler: Handlers<PageData> = {
  GET(_, ctx) {
    const path = ctx.params[0];
    const page = pages[`/${path}`] || null;

    return ctx.render({ page });
  },
};

export default function PageComponent(props: PageProps<PageData>) {
  if (props.data.page) {
    return <BasicTemplate page={props.data.page} />;
  }

  return <ErrorPage statusCode={404} message="Page not found" />;
}
