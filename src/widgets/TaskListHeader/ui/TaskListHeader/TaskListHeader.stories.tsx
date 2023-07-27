import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskListHeader } from './TaskListHeader';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'widgets/TaskListHeader',
  component: TaskListHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof TaskListHeader>;

const Template: ComponentStory<typeof TaskListHeader> = args => <TaskListHeader {...args} />;

export const Normal = Template.bind({});
