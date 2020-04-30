import fundamentals from './theme/fundamentals';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, addParameters, configure } from '@storybook/react';

addParameters({
    options: {
        theme: fundamentals
    }
});

addDecorator(withA11y);

function loadStories() {
    const req = require.context('../src', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
