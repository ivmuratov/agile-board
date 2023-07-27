import { RuleSetRule } from 'webpack';

export const buildTsLoader = (): RuleSetRule => ({
  test: /\.tsx?$/i,
  exclude: '/node_modules/',
  use: ['babel-loader', 'ts-loader'],
});
