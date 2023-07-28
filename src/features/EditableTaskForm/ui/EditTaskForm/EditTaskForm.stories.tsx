import { ComponentStory, ComponentMeta } from '@storybook/react';

import EditTaskForm from './EditTaskForm';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/EditableTaskForm/EditTaskForm',
  component: EditTaskForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof EditTaskForm>;

const Template: ComponentStory<typeof EditTaskForm> = args => <EditTaskForm {...args} />;

export const Normal = Template.bind({});
