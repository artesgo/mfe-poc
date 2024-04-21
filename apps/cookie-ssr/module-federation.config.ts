import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cookie-ssr',
  exposes: {
    './Routes': 'apps/cookie-ssr/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
