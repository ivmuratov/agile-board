import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoardColumnHeader } from './BoardColumnHeader';

export default {
  title: 'pages/ProjectBoardPage/BoardColumnHeader',
  component: BoardColumnHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    countTasks: 10,
  },
} as ComponentMeta<typeof BoardColumnHeader>;

const Template: ComponentStory<typeof BoardColumnHeader> = args => <BoardColumnHeader {...args} />;

export const ToDo = Template.bind({});
ToDo.args = {
  title: 'to do',
};

export const InProgress = Template.bind({});
InProgress.args = {
  title: 'in progress',
};

export const InReview = Template.bind({});
InReview.args = {
  title: 'in review',
};

export const Done = Template.bind({});
Done.args = {
  title: 'done',
};
