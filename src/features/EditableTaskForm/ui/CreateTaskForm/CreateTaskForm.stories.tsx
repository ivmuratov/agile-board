import { ComponentStory, ComponentMeta } from '@storybook/react';

import CreateTaskForm from './CreateTaskForm';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/EditableTaskForm/CreateTaskForm',
  component: CreateTaskForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof CreateTaskForm>;

const Template: ComponentStory<typeof CreateTaskForm> = args => <CreateTaskForm {...args} />;

export const Normal = Template.bind({});
