import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectListPage from './ProjectListPage';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ProjectListPage/ProjectListPage',
  component: ProjectListPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator],
  parameters: {
    mockData: [
      {
        url: `${__API__}/projects`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
} as ComponentMeta<typeof ProjectListPage>;

const Template: ComponentStory<typeof ProjectListPage> = args => <ProjectListPage {...args} />;

export const Normal = Template.bind({});
