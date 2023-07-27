import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectBoardPage from './ProjectBoardPage';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ProjectBoardPage/ProjectBoardPage',
  component: ProjectBoardPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof ProjectBoardPage>;

const Template: ComponentStory<typeof ProjectBoardPage> = args => <ProjectBoardPage {...args} />;

export const Normal = Template.bind({});
