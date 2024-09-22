interface ImportMetaEnv {
  readonly VITE_EMAIL_SENDING_CLIENT: string;
  readonly VITE_EMAIL_SENDING_CLIENT_PASSWORD: string;
  readonly VITE_EMAIL_RECIEVING_ORGANISATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
