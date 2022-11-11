import { config } from '@nubojs/config';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const PORT = parseInt(process.env.PORT || '5000');

export const api = express();

export const startApi = async () => {
  api.use(helmet());
  api.use(cookieParser(config.secretKey));
  api.use(cors());

  api.use('*', (req, res) => {
    res.status(404).json({
      message: `Route GET:${req.originalUrl} not found`,
      error: 'Not Found',
      statusCode: 404,
    });
  });

  api.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};
