import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectDetailsPage from './ProjectDetailsPage';

export default {
  title: 'pages/ProjectDetailsPage',
  component: ProjectDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectDetailsPage>;

const Template: ComponentStory<typeof ProjectDetailsPage> = args => (
  <ProjectDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
