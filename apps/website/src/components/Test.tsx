import { Button } from '@nubojs/ui';
import type { FC } from 'react';

interface Props {
  data: any;
}

const Test: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      Test
      <Button />
    </div>
  );
};

export default Test;
