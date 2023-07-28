import { Story } from '@storybook/react';
import { Suspense } from 'react';

export default (StoryComponent: Story) => (
  <Suspense>
    <StoryComponent />
  </Suspense>
);
