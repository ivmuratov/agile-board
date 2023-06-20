import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectBoardPage from './ProjectBoardPage';

export default {
  title: 'shared/ProjectBoardPage',
  component: ProjectBoardPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProjectBoardPage>;

const Template: ComponentStory<typeof ProjectBoardPage> = args => <ProjectBoardPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
