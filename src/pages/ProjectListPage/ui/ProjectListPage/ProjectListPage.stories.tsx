import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectListPage from './ProjectListPage';

import { ProjectSchema } from '@/entities/Project';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const projectList: ProjectSchema[] = new Array(10).fill('*').map((value, index) => ({
  id: `${index}`,
  name: 'project',
  prefix: 'prefix',
  description: 'description',
  manager: 'manager',
  countTasks: 10,
}));

export default {
  title: 'pages/ProjectListPage/ProjectListPage',
  component: ProjectListPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
} as ComponentMeta<typeof ProjectListPage>;

const Template: ComponentStory<typeof ProjectListPage> = args => <ProjectListPage {...args} />;

export const Normal = Template.bind({});
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/projects`,
      method: 'GET',
      status: 200,
      response: projectList,
    },
  ],
};
