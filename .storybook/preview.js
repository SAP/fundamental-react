/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import fundamentals from './custom/fundamentals';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withCssResources } from '@storybook/addon-cssresources';
import { withI18n } from 'storybook-addon-i18n';
import { addDecorator, addParameters } from '@storybook/react';
import Import from './custom/Import';
// import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import {
    DocsContainer,
    Title,
    Subtitle,
    Description,
    Primary,
    Props,
    Stories,
  } from '@storybook/addon-docs/blocks';

// Order of folders to display
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
        page: () => {
            return (
                <>
                <Title />
                <Subtitle />
                <Import />
                <Description />
                <Primary />
                <Stories />
                <Props />
              </>
            )
        },
        extractComponentDescription(component, storyParameters) {
            console.log({ component, storyParameters })
            if (
              component.__docgenInfo?.description &&
              typeof component.__docgenInfo.description === 'string'
            ) {
              return component.__docgenInfo.description
            }
            return null
          },
    },
    i18n: {
        provider: ({ children }) => <>{children}</>,
        supportedLocales: ['LTR', 'RTL'],
        providerLocaleKey: 'locale',
        getDirection: locale => locale.toLowerCase()
    }
});

addDecorator(withA11y);
addDecorator(withI18n);
addDecorator(withCssResources);
