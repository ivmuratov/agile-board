import { Story } from '@storybook/react';
import { DragDropContext } from 'react-beautiful-dnd';

export default (StoryComponent: Story) => (
  <DragDropContext onDragEnd={() => console.log('end')}>
    <StoryComponent />
  </DragDropContext>
);
