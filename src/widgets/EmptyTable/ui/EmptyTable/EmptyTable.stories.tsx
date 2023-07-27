import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmptyTable from './EmptyTable';

export default {
  title: 'widgets/EmptyTable',
  component: EmptyTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'No items',
    buttonName: 'Create item',
  },
} as ComponentMeta<typeof EmptyTable>;

const Template: ComponentStory<typeof EmptyTable> = args => <EmptyTable {...args} />;

export const Normal = Template.bind({});
