import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectTaskListTable } from './ProjectTaskListTable';

export default {
  title: 'pages/ProjectTaskListPage/ProjectTaskListTable',
  component: ProjectTaskListTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectTaskListTable>;

const Template: ComponentStory<typeof ProjectTaskListTable> = args => (
  <ProjectTaskListTable {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
