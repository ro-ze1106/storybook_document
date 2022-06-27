// ButtonGroup.stories.ts|tsx

import { Meta } from '@storybook/react';

import { Button, ButtonGroup } from './ButtonGroup';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonGroup',
  component: ButtonGroup,
  subcomponents: { Button },
} as Meta;