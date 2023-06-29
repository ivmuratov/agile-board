import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaginationContainer } from './PaginationContainer';

export default {
  title: 'widgets/PaginationContainer',
  component: PaginationContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PaginationContainer>;

const Template: ComponentStory<typeof PaginationContainer> = args => (
  <PaginationContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
