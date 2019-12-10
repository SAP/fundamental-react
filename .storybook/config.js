import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, configure } from '@storybook/react';

addDecorator(withA11y);

function loadStories() {
    const req = require.context('../src', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
