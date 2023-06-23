import { ComponentStory, ComponentMeta } from '@storybook/react';

import CreateTaskForm from './CreateTaskForm';

export default {
  title: 'features/CreateTaskForm',
  component: CreateTaskForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CreateTaskForm>;

const Template: ComponentStory<typeof CreateTaskForm> = args => <CreateTaskForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};