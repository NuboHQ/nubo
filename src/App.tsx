import { value } from './value';
import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient();

const logs = await prisma.log.findMany();

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

export const props = { logs, value };
