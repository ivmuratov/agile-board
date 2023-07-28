import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectBoardPage from './ProjectBoardPage';

import { TaskSchema } from '@/entities/Task';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const taskList: TaskSchema[] = [
  {
    id: '1',
    name: 'task 1',
    description: 'description',
    category: 'category',
    author: 'author',
    executor: 'executor',
    createdDate: '1233',
    status: 'done',
    type: 'task',
    priority: '0',
  },
  {
    id: '2',
    name: 'task 1',
    description: 'description',
    category: 'category',
    author: 'author',
    executor: 'executor',
    createdDate: '1233',
    status: 'done',
    type: 'task',
    priority: '0',
  },
  {
    id: '3',
    name: 'task 1',
    description: 'description',
    category: 'category',
    author: 'author',
    executor: 'executor',
    createdDate: '1233',
    status: 'done',
    type: 'task',
    priority: '0',
  },
];

export default {
  title: 'pages/ProjectBoardPage/ProjectBoardPage',
  component: ProjectBoardPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
  parameters: {
    mockData: [
      {
        url: `${__API__}/tasks?projectId_like=1&q=`,
        method: 'GET',
        status: 200,
        response: taskList,
      },
    ],
  },
} as ComponentMeta<typeof ProjectBoardPage>;

const Template: ComponentStory<typeof ProjectBoardPage> = args => <ProjectBoardPage {...args} />;

export const Normal = Template.bind({});
