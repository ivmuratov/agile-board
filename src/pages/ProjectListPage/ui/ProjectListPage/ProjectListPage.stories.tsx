import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectListPage from './ProjectListPage';

export default {
  title: 'shared/ProjectListPage',
  component: ProjectListPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectListPage>;

const Template: ComponentStory<typeof ProjectListPage> = args => <ProjectListPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
