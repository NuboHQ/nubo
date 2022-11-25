export type NuboClientConfig = {
  env: {
    environment: string;
  };
  props: any;
};

export const clientConfig: NuboClientConfig = JSON.parse(
  document.getElementById('__NUBO_DATA__').textContent,
);
