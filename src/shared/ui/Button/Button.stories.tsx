import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonTheme } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: ButtonTheme.PRIMARY,
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: ButtonTheme.SECONDARY,
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  theme: ButtonTheme.SUCCESS,
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  theme: ButtonTheme.DANGER,
  children: 'Danger',
};
