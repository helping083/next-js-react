// Button.stories.js|jsx

import React from 'react';

import { Button } from './button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Shared/Buttons',
  component: Button,
};

const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Basic = Template.bind({});
Basic.args = {
  text: 'hello world'
}

export const Primary = Template.bind({});
Primary.args = {
  text: 'primary'
}