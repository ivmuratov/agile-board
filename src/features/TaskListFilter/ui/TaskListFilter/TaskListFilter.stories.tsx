import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskListFilter } from './TaskListFilter';

export default {
  title: 'features/TaskListFilter',
  component: TaskListFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TaskListFilter>;

const Template: ComponentStory<typeof TaskListFilter> = args => <TaskListFilter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
