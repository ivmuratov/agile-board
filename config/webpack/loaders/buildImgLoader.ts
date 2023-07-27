import { RuleSetRule } from 'webpack';

export const buildImgLoader = (isDev: boolean): RuleSetRule => ({
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
});
