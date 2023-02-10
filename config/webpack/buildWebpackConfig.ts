import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildOptimization } from './buildOptimization';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

import type { Configuration } from 'webpack';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: {
      index: paths.entry,
    },
    output: {
      path: paths.build,
      filename: 'static/js/[name].[contenthash].bundle.js',
      assetModuleFilename: 'static/media/[name][ext]',
      chunkFilename: 'static/js/[id].bundle.js',
      crossOriginLoading: 'anonymous',
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: isDev ? undefined : buildOptimization(),
  };
};
