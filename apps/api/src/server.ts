import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { prisma } from '@nubojs/database';

const PORT = parseInt(process.env.PORT || '5003');
const app = express();

export const startServer = async () => {
  app.use(helmet());
  app.use(cors());

  app.get('/', (req, res) => {
    res.json({ name: 'nubo' });
  });

  app.get('/pages', async (req, res) => {
    const pages = await prisma.page.findMany();

    res.json(pages);
  });

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};
