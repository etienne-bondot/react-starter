import {configure} from '@storybook/react';
import requireContext from 'require-context.macro';

function loadStories() {
  const req = requireContext('../src/app/__tests__/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
