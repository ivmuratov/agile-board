import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectHeader } from './ProjectHeader';

export default {
  title: 'shared/ProjectHeader',
  component: ProjectHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectHeader>;

const Template: ComponentStory<typeof ProjectHeader> = args => <ProjectHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
