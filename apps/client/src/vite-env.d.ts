/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PORT: string;
  readonly VITE_APP_SERVER_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
