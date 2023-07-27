import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaginationContainer } from './PaginationContainer';

export default {
  title: 'widgets/PaginationContainer',
  component: PaginationContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    totalPages: 3,
    currentPage: 2,
  },
} as ComponentMeta<typeof PaginationContainer>;

const Template: ComponentStory<typeof PaginationContainer> = args => (
  <PaginationContainer {...args} />
);

export const Normal = Template.bind({});

export const FirstCurrentPage = Template.bind({});
FirstCurrentPage.args = {
  currentPage: 1,
};

export const LastCurrentPage = Template.bind({});
LastCurrentPage.args = {
  currentPage: 3,
};
