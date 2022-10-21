import type { FC } from 'react';
import type { Page } from '@nubojs/database';

interface Props {
  page: Partial<Page>;
}

const Test: FC<Props> = ({ page }) => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-lg font-bold">{page.title}</h1>
      </div>
    </div>
  );
};

export default Test;
