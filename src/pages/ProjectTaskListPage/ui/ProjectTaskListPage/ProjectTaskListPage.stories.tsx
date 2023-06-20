import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectTaskListPage from './ProjectTaskListPage';

export default {
  title: 'pages/ProjectTaskListPage',
  component: ProjectTaskListPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectTaskListPage>;

const Template: ComponentStory<typeof ProjectTaskListPage> = args => (
  <ProjectTaskListPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
