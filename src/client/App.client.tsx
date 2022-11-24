import { config } from '../config';

const logs = config.props.logs;
const value = config.props.value;

export const App = () => {
  return (
    <div>
      <h1>{value}</h1>

      {logs.map((log) => (
        <div key={log.id}>{log.message}</div>
      ))}
    </div>
  );
};
