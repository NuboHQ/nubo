export type NuboConfigClient = {
  env: {
    environment: string;
  };
};

export const config: NuboConfigClient = JSON.parse(
  document.getElementById('__NUBO_DATA__').textContent,
);
