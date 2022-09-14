import { tw } from '@twind';

const colors = {
  primary: '#f50',
};

// deno-lint-ignore no-explicit-any
export function useStyles(...styles: any) {
  return tw(...styles);
}
