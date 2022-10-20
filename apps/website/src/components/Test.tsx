// import type { Page } from '@nubojs/data';
import { Button } from '@nubojs/ui';
import { FC, useEffect } from 'react';

interface Props {
  // pages: Page[];
  pages: any[];
}

const Test: FC<Props> = ({ pages }) => {
  useEffect(() => {
    const fn = async () => {
      // console.log(client);
      // const result = await client.query({
      //   pages: {
      //     id: true,
      //     title: true,
      //   },
      // });
    };
    fn();
  }, []);
  return (
    <div>
      {pages.map((page) => (
        <div key={page.id}>{page.title}</div>
      ))}
    </div>
  );
};

export default Test;
