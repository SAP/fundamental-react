/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import fundamentals from './custom/fundamentals';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withI18n } from 'storybook-addon-i18n';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';

const headers = [
    'Introduction',
    'Component API'
];

const storySort = (a, b) => {
    const aHeader = a[1].kind.substr(0, a[1].kind.indexOf('/'));
    const bHeader = b[1].kind.substr(0, b[1].kind.indexOf('/'));

    if (aHeader !== bHeader) {
        const aHeaderIndex = headers.findIndex(h => h === aHeader);
        const bHeaderIndex = headers.findIndex(h => h === bHeader);
        return aHeaderIndex - bHeaderIndex;
    }

    return 0;
};

addParameters({
    options: {
        storySort,
        showRoots: true,
        theme: fundamentals
    },
    docs: {
        container: DocsContainer,
        page: DocsPage
    },
    i18n: {
        provider: ({ children }) => <React.Fragment>{children}</React.Fragment>,
        supportedLocales: ['LTR', 'RTL'],
        providerLocaleKey: 'locale',
        getDirection: locale => locale.toLowerCase()
    }
});

addDecorator(withA11y);
addDecorator(withI18n);
