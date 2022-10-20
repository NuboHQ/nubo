import type { Page, Website } from '@nubojs/data';
import { Button } from '@nubojs/ui';
import { FC, useEffect } from 'react';

interface Props {
  websites: Website[];
  pages: Page[];
}

const Test: FC<Props> = ({ websites, pages }) => {
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
      <div className="py-10">
        <h2 className="text-lg font-bold">Websites</h2>
        {websites.map((website) => (
          <div key={website.id}>{website.name}</div>
        ))}
      </div>

      <div className="py-10">
        <h2 className="text-lg font-bold">Pages</h2>
        {pages.map((page) => (
          <div key={page.id}>{page.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Test;
