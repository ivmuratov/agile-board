import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectTaskListTable } from './ProjectTaskListTable';

import { TaskSchema } from '@/entities/Task';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const taskList: TaskSchema[] = new Array(10).fill('*').map((value, index) => ({
  id: `${index}`,
  name: `Task - ${index}`,
  description: 'description',
  category: 'category',
  author: 'author',
  executor: 'executor',
  createdDate: new Date().toLocaleString(),
  status: 'done',
  type: 'task',
  priority: '0',
}));

export default {
  title: 'pages/ProjectTaskListPage/ProjectTaskListTable',
  component: ProjectTaskListTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    projectId: '1',
    taskList,
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof ProjectTaskListTable>;

const Template: ComponentStory<typeof ProjectTaskListTable> = args => (
  <ProjectTaskListTable {...args} />
);

export const Normal = Template.bind({});
