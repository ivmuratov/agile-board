import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectListTable } from './ProjectListTable';

export default {
  title: 'pages/ProjectListPage/ProjectListTable',
  component: ProjectListTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectListTable>;

const Template: ComponentStory<typeof ProjectListTable> = args => <ProjectListTable {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
