/** @jsx h */
import { h } from 'preact';
import { PageProps, Handlers } from '$fresh/server.ts';
import { ErrorPage } from '@/components/pages/mod.ts';
import { BasicTemplate } from '@/components/templates/mod.ts';
import { Page } from '@nubo/pages/mod.ts';
import { logger } from '@/deps.ts';
import { config } from '@/config.ts';
import { gql, graphql } from '@/deps.ts';

export type PageData = {
  page: Page | null;
  // deno-lint-ignore no-explicit-any
  error?: any | null;
};

export const handler: Handlers<PageData> = {
  async GET(_, ctx) {
    try {
      const path = `/${ctx.params[0]}`;
      const query = gql`
        query GetPage($path: String!) {
          page(path: $path) {
            title
          }
        }
      `;
      const data = await graphql(
        config.api.graphql,
        query,
        { path },
        {
          'x-nubo-secret-key': config.api.secretKey,
        },
      );
      const page = data.page;

      return ctx.render({ page, error: null });
    } catch (error) {
      return ctx.render({ page: null, error });
    }
  },
};

export default function PageComponent(props: PageProps<PageData>) {
  if (props.data.page) {
    return <BasicTemplate page={props.data.page} />;
  }

  if (props.data.error?.message) {
    logger.error(props.data.error);

    return <ErrorPage statusCode={500} message="Check logs for error" />;
  }

  return <ErrorPage statusCode={404} message="Page not found" />;
}
