import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const PORT = parseInt(process.env.PORT || '5003');
const app = express();

export const startServer = async () => {
  app.use(helmet());
  app.use(cors());

  app.get('/', (req, res) => {
    res.json({ name: 'nubo' });
  });

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};
