import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskCard } from './TaskCard';

export default {
  title: 'entities/TaskCard',
  component: TaskCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    name: 'Task',
    author: 'author',
    type: 'task',
  },
} as ComponentMeta<typeof TaskCard>;

const Template: ComponentStory<typeof TaskCard> = args => <TaskCard {...args} />;

export const Task = Template.bind({});
Task.args = {
  type: 'task',
  priority: '0',
};

export const Error = Template.bind({});
Error.args = {
  name: 'Error',
  type: 'error',
  priority: '0',
};

export const Priority0 = Template.bind({});
Priority0.args = {
  priority: '0',
};

export const Priority1 = Template.bind({});
Priority1.args = {
  priority: '1',
};

export const Priority2 = Template.bind({});
Priority2.args = {
  priority: '2',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  description: 'desc',
  priority: '0',
};

export const WithExecutor = Template.bind({});
WithExecutor.args = {
  executor: 'executor',
  priority: '0',
};

export const WithCategory = Template.bind({});
WithCategory.args = {
  category: 'category',
  priority: '0',
};
