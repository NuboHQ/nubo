import type { Page } from '@nubojs/data';
import { Button } from '@nubojs/ui';
import type { FC } from 'react';

interface Props {
  pages: Page[];
}

const Test: FC<Props> = ({ pages }) => {
  return (
    <div>
      {pages.map((page) => (
        <div key={page.id}>{page.title}</div>
      ))}
    </div>
  );
};

export default Test;
