import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import type { Configuration } from 'webpack';

type Optimization = Configuration['optimization'];

export const buildOptimization = (): Optimization => ({
  runtimeChunk: 'single',
  minimizer: ['...', new CssMinimizerPlugin()],
});
