import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { RuleSetRule } from 'webpack';

export const buildCssLoader = (isDev: boolean): RuleSetRule => ({
  test: /\.css$/i,
  use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
});
