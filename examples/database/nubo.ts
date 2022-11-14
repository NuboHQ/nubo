declare type NuboRequest = typeof Request;

export const NuboRequest = Request;
export const NuboResponse = Response;

export type NuboContext = {
  req: typeof NuboRequest;
};
