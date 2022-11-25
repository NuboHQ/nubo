import { FC } from 'react';

const config = {
  props: { logs: [], value: 'e' },
};

const Page: FC = () => {
  return <div>App {config.props.value}</div>;
};

export default Page;
