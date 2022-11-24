export type NuboConfigClient = {
  env: {
    environment: string;
  };
  props: any;
};

export const config: NuboConfigClient = JSON.parse(
  document.getElementById('__NUBO_DATA__').textContent,
);
