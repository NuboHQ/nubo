
import { value } from '../src/value';

const logs = config.props.logs;

export const App = () => {
  return (
    <div>
      {value}
      {logs.map((log) => (
        <div key={log.id}>{log.message}</div>
      ))}
    </div>
  );
};
