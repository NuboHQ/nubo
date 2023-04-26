import { connect as dbConnect, Config } from '@planetscale/database';

export type NuboConnectOptions = {
  key?: string;
  host?: string;
  fetch?: Config['fetch'];
};

export const connect = (options?: NuboConnectOptions) => {
  const secretKey = options?.key || process.env.NUBO_SECRET_KEY;

  if (!secretKey) throw new Error('Missing secret key');

  const host = options?.host || 'data.nubo.global';
  const url = `https://${secretKey}@${host}/client`;

  return dbConnect({
    ...(options?.fetch && { fetch: options.fetch }),
    url,
  });
};
