/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SECRET_KEY?: string;
  readonly PUBLIC_NUBO_WEBSITE_URL?: string;
  readonly PUBLIC_NUBO_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
