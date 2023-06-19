import { ComponentStory, ComponentMeta } from '@storybook/react';

import CreateProjectForm from './CreateProjectForm';

export default {
  title: 'shared/CreateProjectForm',
  component: CreateProjectForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CreateProjectForm>;

const Template: ComponentStory<typeof CreateProjectForm> = args => <CreateProjectForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
