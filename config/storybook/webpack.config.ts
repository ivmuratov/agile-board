/* eslint-disable no-param-reassign */
import path from 'path';

import { DefinePlugin } from 'webpack';

import { buildSvgLoader } from '../webpack/loaders/buildSvgLoader';
import { BuildPaths } from '../webpack/types/config';

import type { Configuration, RuleSetRule } from 'webpack';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    public: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  const rules = config.module!.rules as RuleSetRule[];

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  };
  config!.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config!.module!.rules.push(buildSvgLoader());
  config!.plugins!.push(
    new DefinePlugin({
      __API__: JSON.stringify('https://testapi.com'),
    }),
  );

  return config;
};
