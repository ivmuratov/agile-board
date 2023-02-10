import { BuildOptions } from './types/config';

import type { Configuration as DevServerConfig } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfig => {
  const { port } = options;

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    compress: true,
  };
};
