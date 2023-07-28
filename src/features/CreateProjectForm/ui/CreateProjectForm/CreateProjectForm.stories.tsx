import { ComponentStory, ComponentMeta } from '@storybook/react';

import CreateProjectForm from './CreateProjectForm';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/CreateProjectForm',
  component: CreateProjectForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof CreateProjectForm>;

const Template: ComponentStory<typeof CreateProjectForm> = args => <CreateProjectForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
