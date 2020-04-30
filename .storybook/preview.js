import fundamentals from './theme/fundamentals';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';

addParameters({
    options: {
        theme: fundamentals
    },
    docs: {
        container: DocsContainer,
        page: DocsPage
    }
});

addDecorator(withA11y);

