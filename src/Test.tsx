//server
import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient();

const logs = await prisma.log.findMany();

export const props = { logs };
//server

import { useState } from 'react';
import { motion } from 'framer-motion';

export const App = () => {
  const [count, setCount] = useState(5);

  return (
    <div
      style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: 100 }}
    >
      <h1>Count {count}</h1>
      <br />
      <br />

      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'cyan',
          margin: 'auto',
          cursor: 'pointer',
        }}
        initial={{ rotate: 360, opacity: 0 }}
        animate={{ rotate: 0 * 10, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 20 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => setCount(count + 1)}
      />

      <br />
      <br />
      {logs.map((log) => (
        <div key={log.id}>{log.message}</div>
      ))}

      <br />
      <br />

      <button
        style={{ marginLeft: 10, marginRight: 10 }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>

      <button
        style={{ marginLeft: 10, marginRight: 10 }}
        onClick={() => setCount(0)}
      >
        0
      </button>

      <button
        style={{ marginLeft: 10, marginRight: 10 }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};
