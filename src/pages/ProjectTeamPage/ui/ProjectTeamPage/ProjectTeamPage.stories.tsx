import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectTeamPage from './ProjectTeamPage';

export default {
  title: 'pages/ProjectTeamPage',
  component: ProjectTeamPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectTeamPage>;

const Template: ComponentStory<typeof ProjectTeamPage> = args => <ProjectTeamPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
