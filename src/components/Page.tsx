import { Layout } from './Layout';

export const Page = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Nubo</h1>

      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
    </Layout>
  );
};
