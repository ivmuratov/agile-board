import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoardColumn } from './BoardColumn';

export default {
  title: 'pages/ProjectBoardPage/BoardColumn',
  component: BoardColumn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BoardColumn>;

const Template: ComponentStory<typeof BoardColumn> = args => <BoardColumn {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
