import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoardColumnHeader } from './BoardColumnHeader';

export default {
  title: 'shared/BoardColumnHeader',
  component: BoardColumnHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BoardColumnHeader>;

const Template: ComponentStory<typeof BoardColumnHeader> = args => <BoardColumnHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
