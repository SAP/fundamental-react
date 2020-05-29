/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import fundamentals from './custom/fundamentals';
import React from 'react';
// import { withA11y } from '@storybook/addon-a11y';
import { withCssResources } from '@storybook/addon-cssresources';
import { withI18n } from 'storybook-addon-i18n';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import DocsPage from './custom/components/DocsPage';
import { addDecorator, addParameters } from '@storybook/react';

addParameters({
    options: {
        showRoots: true,
        theme: fundamentals
    },
    cssresources: [
        {
            id: 'css_variables',
            code: '<link rel="stylesheet" type="text/css" href="./css_variables.css"></link>',
            picked: true
        },
        {
            id: 'dark_css_variables',
            code: '<link rel="stylesheet" type="text/css" href="./dark_css_variables.css"></link>',
            picked: false
        },
        {
            id: 'light_dark_css_variables',
            code: '<link rel="stylesheet" type="text/css" href="./light_dark_css_variables.css"></link>',
            picked: false
        },
        {
            id: 'HCB_css_variables',
            code: '<link rel="stylesheet" type="text/css" href="./HCB_css_variables.css"></link>',
            picked: false
        },
        {
            id: 'HCW_css_variables',
            code: '<link rel="stylesheet" type="text/css" href="./HCW_css_variables.css"></link>',
            picked: false
        }
    ],
    docs: {
        container: DocsContainer,
        page: DocsPage
    },
    i18n: {
        provider: ({ children }) => <>{children}</>,
        supportedLocales: ['LTR', 'RTL'],
        providerLocaleKey: 'locale',
        getDirection: locale => locale.toLowerCase()
    }
});
// TO DO: storybook@6 enable - there is an issue with visual regression tests
// addDecorator(withA11y);
addDecorator(withI18n);
addDecorator(withCssResources);
