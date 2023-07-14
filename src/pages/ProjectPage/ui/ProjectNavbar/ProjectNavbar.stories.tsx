import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectNavbar } from './ProjectNavbar';

export default {
  title: 'pages/ProjectNavbar',
  component: ProjectNavbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectNavbar>;

const Template: ComponentStory<typeof ProjectNavbar> = args => <ProjectNavbar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
