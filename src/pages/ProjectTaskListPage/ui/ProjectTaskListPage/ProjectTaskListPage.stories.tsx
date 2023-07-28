import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectTaskListPage from './ProjectTaskListPage';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ProjectTaskListPage/ProjectTaskListPage',
  component: ProjectTaskListPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof ProjectTaskListPage>;

const Template: ComponentStory<typeof ProjectTaskListPage> = args => (
  <ProjectTaskListPage {...args} />
);

export const Normal = Template.bind({});
