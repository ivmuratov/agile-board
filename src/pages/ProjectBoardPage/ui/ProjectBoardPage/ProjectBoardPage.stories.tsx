import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectBoardPage from './ProjectBoardPage';

import { TaskSchema } from '@/entities/Task';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const taskList: Partial<TaskSchema>[] = [
  {
    id: '1',
    name: 'task 1',
    status: 'to do',
    type: 'task',
    priority: '0',
  },
  {
    id: '2',
    name: 'task 2',
    status: 'to do',
    type: 'error',
    priority: '1',
  },
  {
    id: '3',
    name: 'task 3',
    status: 'to do',
    type: 'task',
    priority: '2',
  },
  {
    id: '4',
    name: 'task 4',
    status: 'to do',
    type: 'error',
    priority: '0',
  },
  {
    id: '5',
    name: 'task 2',
    status: 'in progress',
    type: 'task',
    priority: '1',
  },
  {
    id: '6',
    name: 'task 3',
    status: 'in progress',
    type: 'error',
    priority: '2',
  },
  {
    id: '7',
    name: 'task 4',
    status: 'in progress',
    type: 'task',
    priority: '0',
  },
  {
    id: '8',
    name: 'task 3',
    status: 'in review',
    type: 'error',
    priority: '1',
  },
  {
    id: '9',
    name: 'task 4',
    status: 'in review',
    type: 'task',
    priority: '2',
  },
  {
    id: '10',
    name: 'task 4',
    status: 'done',
    type: 'error',
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
