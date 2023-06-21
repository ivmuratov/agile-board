import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectTaskListFilters } from './ProjectTaskListFilters';

export default {
  title: 'shared/ProjectTaskListFilters',
  component: ProjectTaskListFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectTaskListFilters>;

const Template: ComponentStory<typeof ProjectTaskListFilters> = args => (
  <ProjectTaskListFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
