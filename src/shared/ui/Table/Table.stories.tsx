import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table, TableColumn, TableRow, TableRowElement } from './Table';

const columns: TableColumn[] = [
  {
    value: '#',
  },
  {
    value: 'First Column',
  },
  {
    value: 'Second Column',
  },
  {
    value: 'Third Column',
  },
  {
    value: 'Fourth Column',
  },
  {
    value: 'Fifth Column',
  },
];

const getItems = (id: string): TableRowElement[] => [
  {
    keyId: '1',
    value: id,
  },
  {
    keyId: '2',
    value: 'first Item',
  },
  {
    keyId: '3',
    value: 'second Item',
  },
  {
    keyId: '4',
    value: 'third Item',
  },
  {
    keyId: '5',
    value: 'fourth Item',
  },
  {
    keyId: '6',
    value: 'fifth Item',
  },
];

const rows: TableRow[] = [
  {
    id: '1',
    items: getItems('1'),
  },
  {
    id: '2',
    items: getItems('2'),
  },
  {
    id: '3',
    items: getItems('3'),
  },
  {
    id: '4',
    items: getItems('4'),
  },
  {
    id: '5',
    items: getItems('5'),
  },
];

export default {
  title: 'shared/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    columns,
    rows,
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

export const Primary = Template.bind({});
