import * as Colors from 'https://deno.land/std/fmt/colors.ts';

export class Logger {
  public static info = (text: string, label?: string) => {
    if (label) {
      console.log(Colors.brightBlue(`[${label}]`), text);
    } else {
      console.log(text);
    }
  };

  public static error = (text: string, label?: string) => {
    if (label) {
      console.error(Colors.red(`[error:${label}]`), text);
    } else {
      console.error(text);
    }
  };
}
