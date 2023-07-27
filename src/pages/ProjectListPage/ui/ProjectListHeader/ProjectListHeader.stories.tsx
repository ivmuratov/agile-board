import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectListHeader } from './ProjectListHeader';

export default {
  title: 'pages/ProjectListPage/ProjectListHeader',
  component: ProjectListHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectListHeader>;

const Template: ComponentStory<typeof ProjectListHeader> = args => <ProjectListHeader {...args} />;

export const WithProjectList = Template.bind({});
WithProjectList.args = {
  isEmptyProjectList: false,
};

export const WithoutProjectList = Template.bind({});
WithoutProjectList.args = {
  isEmptyProjectList: true,
};
