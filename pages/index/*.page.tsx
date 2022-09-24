import React from 'react';
import { request, gql } from 'graphql-request';
import { PageContext } from '@/renderer/types';
import { Page as PageType } from '@prisma/client';

export { Page };

export { onBeforeRender };

async function onBeforeRender(context: PageContext) {
  try {
    const query = gql`
      query FindPageByPath($path: String!) {
        findFirstPage(where: { path: { equals: $path } }) {
          title
          path
          website {
            name
          }
        }
      }
    `;

    const variables = { path: context.urlPathname };

    const data = await request(
      'http://localhost:5555/graphql',
      query,
      variables,
    );
    const page = data.findFirstPage;

    console.log(page);

    if (!page) {
      const { RenderErrorPage } = await import('vite-plugin-ssr');

      throw RenderErrorPage({
        pageContext: {
          errorInfo: `This is an error`,
        },
      });
    }

    return {
      pageContext: {
        pageProps: {
          page: data.findFirstPage,
        },
      },
    };
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
  const pageProps = {};

  return {
    pageContext: {
      pageProps,
    },
  };
}

function Page(props: { page: PageType }) {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold underline">{props.page.title}</h1>

        <p className="m-20">This is the {props.page.title} page.</p>
      </div>
    </>
  );
}
