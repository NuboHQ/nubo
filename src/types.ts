import { Request, Response } from 'express';

export type NuboRequest = Request;

export type NuboResponse = Response;

export type NuboContext = {
  req: NuboRequest;
  res: NuboResponse;
};
