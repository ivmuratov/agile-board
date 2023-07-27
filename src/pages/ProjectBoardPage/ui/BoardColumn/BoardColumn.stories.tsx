import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoardColumn } from './BoardColumn';

import { TaskSchema } from '@/entities/Task';
import DnDDecorator from '@/shared/config/storybook/DnDDecorator/DnDDecorator';

const tasks: Partial<TaskSchema>[] = [
  {
    id: '1',
    name: 'Task 1',
    type: 'task',
    priority: '0',
  },
  {
    id: '2',
    name: 'Task 2',
    type: 'error',
    priority: '1',
  },
  {
    id: '3',
    name: 'Task 3',
    type: 'task',
    priority: '2',
  },
];

export default {
  title: 'pages/ProjectBoardPage/BoardColumn',
  component: BoardColumn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    tasks,
  },
  decorators: [DnDDecorator],
} as ComponentMeta<typeof BoardColumn>;

const Template: ComponentStory<typeof BoardColumn> = args => <BoardColumn {...args} />;

export const ToDo = Template.bind({});
ToDo.args = {
  statusTypeTask: 'to do',
};

export const InProgress = Template.bind({});
InProgress.args = {
  statusTypeTask: 'in progress',
};

export const InReview = Template.bind({});
InReview.args = {
  statusTypeTask: 'in review',
};

export const Done = Template.bind({});
Done.args = {
  statusTypeTask: 'done',
};
