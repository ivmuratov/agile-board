import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { Configuration } from 'webpack';

type Optimization = Configuration['optimization'];

export const buildOptimization = (): Optimization => {
  return {
    runtimeChunk: 'single',
    minimizer: ['...', new CssMinimizerPlugin()],
  };
};
