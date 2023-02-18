import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

import type { RuleSetRule } from 'webpack';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  const imageLoader: RuleSetRule = {
    test: /\.(jpe?g|png|gif)$/i,
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

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/i,
    exclude: '/node_modules/',
    use: ['babel-loader', 'ts-loader'],
  };

  return [imageLoader, svgLoader, cssLoader, typescriptLoader];
};
