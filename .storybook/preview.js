import fundamentals from './custom/fundamentals';
import React from 'react';
import { withCssResources } from '@storybook/addon-cssresources';
import { withI18n } from 'storybook-addon-i18n';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import DocsPage from './custom/components/DocsPage';
import { addDecorator, addParameters } from '@storybook/react';

addParameters({
    options: {
        showRoots: false,
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
        page: DocsPage,
        theme: fundamentals,
    },
    i18n: {
        provider: ({ children }) => <>{children}</>,
        supportedLocales: ['LTR', 'RTL'],
        providerLocaleKey: 'locale',
        getDirection: locale => locale.toLowerCase()
    }
});

addDecorator(withI18n);
addDecorator(withCssResources);
addDecorator(withKnobs);
