import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskFilter } from './TaskFilter';

export default {
  title: 'features/TaskFilter',
  component: TaskFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TaskFilter>;

const Template: ComponentStory<typeof TaskFilter> = args => <TaskFilter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
