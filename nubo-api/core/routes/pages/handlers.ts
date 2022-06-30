import { Router } from '../../../deps.ts';
import { Page } from '@nubo-shared/pages/mod.ts';

const pages: { [path: string]: Page } = { '/': { title: 'Home' } };

export const pagesHandler = (router: Router) => {
  router.get('/pages', ({ response }) => {
    const allPages: Page[] = [];

    for (const path in pages) {
      allPages.push(pages[path]);
    }

    response.body = {
      data: allPages,
    };
  });
};

export const pageHandler = (router: Router) => {
  router.get('/page', ({ request, response }) => {
    const path = request.url.searchParams.get('path') || '';

    if (path) {
      const page = pages[path];

      response.body = {
        data: page || null,
      };
    } else {
      response.body = {
        data: null,
      };
    }
  });
};

export const init = (router: Router) => {
  pagesHandler(router);
  pageHandler(router);
};
