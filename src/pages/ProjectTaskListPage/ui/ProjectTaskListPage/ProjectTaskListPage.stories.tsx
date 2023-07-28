import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectTaskListPage from './ProjectTaskListPage';

import { TaskSchema } from '@/entities/Task';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const taskList: TaskSchema[] = new Array(20).fill('*').map((val, index) => ({
  id: `${index}`,
  name: `task - ${index}`,
  description: 'description',
  category: 'category',
  author: 'author',
  executor: 'executor',
  createdDate: new Date().toLocaleDateString(),
  status: 'to do',
  type: 'task',
  priority: '0',
}));

export default {
  title: 'pages/ProjectTaskListPage/ProjectTaskListPage',
  component: ProjectTaskListPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
  parameters: {
    mockData: [
      {
        url: `${__API__}/tasks?projectId_like=1&q=&_page=1&_limit=10`,
        method: 'GET',
        status: 200,
        response: taskList,
      },
    ],
  },
} as ComponentMeta<typeof ProjectTaskListPage>;

const Template: ComponentStory<typeof ProjectTaskListPage> = args => (
  <ProjectTaskListPage {...args} />
);

export const Normal = Template.bind({});
