import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectPage from './ProjectPage';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ProjectPage/ProjectPage',
  component: ProjectPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof ProjectPage>;

const Template: ComponentStory<typeof ProjectPage> = args => <ProjectPage {...args} />;

export const Normal = Template.bind({});
