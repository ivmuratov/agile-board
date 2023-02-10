// eslint-disable-next-line import/default
import CopyPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackPluginInstance, ProgressPlugin, ProvidePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, analyze }: BuildOptions): WebpackPluginInstance[] => [
  new ProgressPlugin(),
  new HtmlPlugin({
    template: paths.html,
    filename: 'index.html',
    templateParameters: {
      title: 'Scrum',
    },
  }),
  new CopyPlugin({
    patterns: [
      {
        from: `${paths.public}/assets`,
        to: `${paths.build}/assets`,
      },
    ],
  }),
  new MiniCssExtractPlugin({
    filename: 'static/css/[name].[contenthash].css',
    chunkFilename: 'static/css/[name].[contenthash].css',
  }),
  new ProvidePlugin({
    React: 'react',
  }),
  new ESLintPlugin({
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    exclude: ['node_modules', 'build', '.vscode'],
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: analyze ? 'server' : 'disabled',
  }),
];
