import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectPage from './ProjectPage';

export default {
  title: 'pages/ProjectPage/ProjectPage',
  component: ProjectPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectPage>;

const Template: ComponentStory<typeof ProjectPage> = args => <ProjectPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
