import { FC } from 'react';

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};

await sleep();

const value = 'e';
const logs = [];

export const config = { path: '/logs', props: { logs, value } };

const Page: FC = () => {
  return <div>App {value}</div>;
};

export default Page;
