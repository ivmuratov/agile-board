import path from 'path';

import { BuildPaths } from '../webpack/types/config';

import type { Configuration } from 'webpack';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    public: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  return config;
};
