import { Configuration as DevServerConfig } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

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
