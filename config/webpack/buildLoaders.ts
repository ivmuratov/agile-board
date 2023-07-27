import { buildCssLoader } from './loaders/buildCssLoader';
import { buildImgLoader } from './loaders/buildImgLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTsLoader } from './loaders/buildTsLoader';
import { BuildOptions } from './types/config';

import type { RuleSetRule } from 'webpack';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const svgLoader = buildSvgLoader();

  const imageLoader = buildImgLoader(isDev);

  const cssLoader = buildCssLoader(isDev);

  const tsLoader = buildTsLoader();

  return [imageLoader, svgLoader, cssLoader, tsLoader];
};
