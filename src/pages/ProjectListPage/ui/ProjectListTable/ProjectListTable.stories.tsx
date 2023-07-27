import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectListTable } from './ProjectListTable';

import { ProjectSchema } from '@/entities/Project';

const projectList: ProjectSchema[] = new Array(10).fill('*').map((value, index) => ({
  id: `${index}`,
  name: 'project',
  prefix: 'prefix',
  description: 'description',
  manager: 'manager',
  countTasks: 10,
}));

export default {
  title: 'pages/ProjectListPage/ProjectListTable',
  component: ProjectListTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    projectList,
  },
} as ComponentMeta<typeof ProjectListTable>;

const Template: ComponentStory<typeof ProjectListTable> = args => <ProjectListTable {...args} />;

export const Normal = Template.bind({});
