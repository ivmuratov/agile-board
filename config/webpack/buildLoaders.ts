import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

import type { RuleSetRule } from 'webpack';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const imageLoader: RuleSetRule = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    type: 'asset/resource',
    generator: isDev ? undefined : { filename: 'static/media/imgs/[name].[contenthash][ext]' },
    use: isDev
      ? []
      : [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
  };

  const cssLoader: RuleSetRule = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  };

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/i,
    exclude: '/node_modules/',
    use: ['babel-loader', 'ts-loader'],
  };

  return [imageLoader, cssLoader, typescriptLoader];
};
