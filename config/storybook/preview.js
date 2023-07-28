import { addDecorator } from '@storybook/react';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import SuspenseDecorator from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import '../../src/index';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);