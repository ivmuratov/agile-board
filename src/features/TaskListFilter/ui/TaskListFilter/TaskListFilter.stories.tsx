import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskListFilter } from './TaskListFilter';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/TaskListFilter',
  component: TaskListFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof TaskListFilter>;

const Template: ComponentStory<typeof TaskListFilter> = args => <TaskListFilter {...args} />;

export const Normal = Template.bind({});
