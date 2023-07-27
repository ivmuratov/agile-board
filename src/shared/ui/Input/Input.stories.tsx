import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Primary = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
};

export const WithTextHelper = Template.bind({});
WithTextHelper.args = {
  textHelper: 'Text helper',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};
