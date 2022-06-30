import * as Colors from 'https://deno.land/std/fmt/colors.ts';

const options = { name: '' };

export const init = ({ name }: { name: string }) => {
  options.name = name;
};

export const info = (text: string, labels?: string[]) => {
  labels = labels ? labels : [];
  labels.unshift(options.name);

  console.log(Colors.brightBlue(`[${labels.join(':')}]`), text);
};

export const success = (text: string, labels?: string[]) => {
  labels = labels ? labels : [];
  labels.unshift(options.name);

  console.log(Colors.green(`[${labels.join(':')}]`), text);
};

export const error = (text: string, labels?: string[]) => {
  labels = labels ? labels : [];
  labels.unshift('error');
  labels.unshift(options.name);

  console.error(Colors.red(`[${labels.join(':')}]`), text);
};
