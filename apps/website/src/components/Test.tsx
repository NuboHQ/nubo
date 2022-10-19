import type { Page } from '@nubojs/database';
import { Button } from '@nubojs/ui';
import type { FC } from 'react';

interface Props {
  pages: Page[];
}

const Test: FC<Props> = ({ pages }) => {
  console.log(pages[0]);
  return (
    <div>
      Test
      <Button />
    </div>
  );
};

export default Test;
