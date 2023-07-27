import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select, { Option } from './Select';

type SomeType = '1' | '2' | '3';

const options: Option<SomeType>[] = [
  {
    value: '1',
    name: 1,
  },
  {
    value: '2',
    name: 2,
  },
  {
    value: '3',
    name: 3,
  },
];

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    options,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Primary = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};
