import { BuildOptions } from './types/config';

import type { ResolveOptions } from 'webpack';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    '@': paths.src,
  },
});
