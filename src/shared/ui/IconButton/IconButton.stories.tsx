import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';

import RightArrowIcon from '@/shared/assets/info.svg';

export default {
  title: 'shared/IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    Svg: RightArrowIcon,
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
