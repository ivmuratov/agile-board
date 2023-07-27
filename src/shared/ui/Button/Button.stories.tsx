import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  theme: 'success',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  theme: 'danger',
  children: 'Danger',
};
