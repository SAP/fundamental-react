import fundamentals from './theme/fundamentals';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, addParameters } from '@storybook/react';

addParameters({
    options: {
        theme: fundamentals
    }
});

addDecorator(withA11y);

