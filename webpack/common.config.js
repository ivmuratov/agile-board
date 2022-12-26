const paths = require('./paths');
const { ProgressPlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: `${paths.src}/index.tsx`,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'media/[name][ext]',
    crossOriginLoading: 'anonymous',
    clean: true,          
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: '/node_modules/',
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
        type: 'asset',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader', 
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.public}/assets`,
          to: `${paths.build}/assets`,
        },        
      ],
    }),
    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      filename: 'index.html',
      templateParameters: {        
        title: 'Scrum',        
      },
    }),
    new ProvidePlugin({
      React: 'react',
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      exclude: [
        'node_modules',
        'build',
        '.vscode',
        'webpack',
      ],
    }),
  ],
};