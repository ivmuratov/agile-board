import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectListHeader } from './ProjectListHeader';

export default {
  title: 'shared/ProjectListHeader',
  component: ProjectListHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectListHeader>;

const Template: ComponentStory<typeof ProjectListHeader> = args => <ProjectListHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
