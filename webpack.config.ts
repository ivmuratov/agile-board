import path from 'path';

import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/webpack/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const analyze = env.analyze || false;
  const PORT = env.port || 3000;

  return buildWebpackConfig({ mode, paths, isDev, analyze, port: PORT });
};
