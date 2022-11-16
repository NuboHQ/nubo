export { clear } from 'https://deno.land/x/clear@v1.3.0/mod.ts';

export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
