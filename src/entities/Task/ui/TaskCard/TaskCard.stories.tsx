import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskCard } from './TaskCard';

export default {
  title: 'entities/TaskCard',
  component: TaskCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TaskCard>;

const Template: ComponentStory<typeof TaskCard> = args => <TaskCard {...args} />;

export const Priority0 = Template.bind({});
Priority0.args = {
  priority: '0',
};

export const Priority1 = Template.bind({});
Priority1.args = {
  priority: '1',
};

export const Priority2 = Template.bind({});
Priority2.args = {
  priority: '2',
};
