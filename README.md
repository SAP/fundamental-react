# Fundamental React

[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-react)](https://api.reuse.software/info/github.com/SAP/fundamental-react)
[![npm version](https://badge.fury.io/js/fundamental-react.svg)](//www.npmjs.com/package/fundamental-react)
[![Minified Size](https://badgen.net/bundlephobia/min/fundamental-react)](https://bundlephobia.com/result?p=fundamental-react)	
[![Minzipped Size](https://badgen.net/bundlephobia/minzip/fundamental-react)](https://bundlephobia.com/result?p=fundamental-react)
[![Build Status](https://travis-ci.org/SAP/fundamental-react.svg?branch=main)](https://travis-ci.org/SAP/fundamental-react)
[![Coverage Status](https://coveralls.io/repos/github/SAP/fundamental-react/badge.svg?branch=main)](https://coveralls.io/github/SAP/fundamental-react?branch=main)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
</a>

## Description

The `fundamental-react` library is a set of [React](https://reactjs.org/) components built using [SAP Fundamental Styles](https://sap.github.io/fundamental-styles/).

The Fundamental Styles library is a design system and HTML/CSS component library used to build modern product user experiences with the SAP look and feel.

## API Reference

See [Component Documentation](https://sap.github.io/fundamental-react/) for examples and API details.

## Requirements

You will need to install [Node and Node Package Manager](https://www.npmjs.com/get-npm).

## Polyfills

Fundamental React requires a polyfill for:
- [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

You will need to add your own polyfills. See [core-js](https://github.com/zloirock/core-js#commonjs-api) for instructions.

## Getting Started

For an existing react application, follow the steps below:

1. Install `fundamental-react`.

    ```javascript
    npm install fundamental-react
    ```

1. All components are currently packaged together with their respective `css`, you will need to edit your webpack configuration to handle these files. See [css-loader](https://github.com/webpack-contrib/css-loader).

1. Import components as needed. See [Component Documentation](https://sap.github.io/fundamental-react/) for examples and API details.
    ```javascript
    import { MessageStrip } from 'fundamental-react/lib/MessageStrip';
    ```
    or
    ```javascript
    import { MessageStrip } from 'fundamental-react';
    ```

    > **NOTE:** Importing from specific component is recommended. Doing so will bring in only the component you are using instead of the whole library, which will reduce your bundle size significantly.


1. This project does not contain fonts and icons - they must be added to your project separately. Download [Font 72](https://experience.sap.com/fiori-design-web/downloads/#download-font-72) and [SAP icons](https://experience.sap.com/fiori-design-web/downloads/#sap-icon-font). After adding fonts and icons to your project, include the following in your css:

```css
    @font-face {
        font-family: "72";
        src: url("path/to/fonts") format("woff"); /* Bold, Light, Regular available in woff and woff2 */
        font-weight: normal;
        font-style: normal;
    };

    @font-face {
        font-family: "SAP-icons";
        src: url("path/to/icons") format("woff"); /* available in woff, woff2 and ttf */
        font-weight: normal;
        font-style: normal;
    }
```

Additionally, edit your webpack configuration to load font and icon fonts - see [file-loader](https://webpack.js.org/loaders/file-loader/).

All styles are based on `rem` units. Include the following in your CSS to ensure components are sized correctly:

```css
    html {
        font-size: 16px;
    }
```

## Versioning

The `fundamental-react` library follows [Semantic Versioning](https://semver.org/). These components strictly adhere to the `[MAJOR].[MINOR].[PATCH]` numbering system (also known as `[BREAKING].[FEATURE].[FIX]`).

Merges to the `main` branch will be published as a prerelease. Prereleases will include an **rc** version (_e.g._ `[MAJOR].[MINOR].[PATCH]-rc.[RC]`).

The following circumstances will be considered a **BREAKING** change:
* A component’s existing API is altered (with the exception of additions)
* The existing underlying HTML markup of a component is altered
* An existing unit test is altered to account for either of the above

The following circumstances will NOT be considered a **BREAKING** change:
* Additions to a component’s API
* Non-visual HTML attribute changes/additions (such as `role`, `aria-*`, `data-*`)
* An existing unit test is altered to account for non-visual HTML attribute changes/additions (such as `role`, `aria-*`, `data-*`)

## CSS Modules

This library supports [css-modules](https://github.com/css-modules/css-modules). The motivation for this support is to be able to include multiple versions or instances of fundamental styles on the same page without collisions in styles.  This can be useful if you have a page using fundamental-ngx alongside fundamental-react, for example.

One way to use fundamental-react with hashed class names is to pass the library code through css-loader in your webpack config

```js
// If you have an existing css rule
{
    test: /.css$/,
    exclude: [
        /node_modules\/fundamental-styles/
    ],
    use: [
        'style-loader',
        'css-loader'
    ]
},
// run css-loader with modules enabled for css files from fundamental-styles
{
    test: /.css$/,
    include: [
        /node_modules\/fundamental-styles/
    ],
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[local]-[sha1:hash:hex:6]'
                }
            }
        }
    ]
},
```

It's important to include `[local]` in the localIdentName which keeps the class name in the hash. This is because some of the style rules in fundamental-styles reference the name of the class, like `[class*=level]`.

## Known Issues

Please see [Issues](https://github.com/SAP/fundamental-react/issues).

## Support

If you encounter an issue or want to request a feature, you can [create an issue](https://github.com/SAP/fundamental-react/issues/new).

## Contributing

If you want to contribute, please check the [Contribution Guidelines](https://github.com/SAP/fundamental-react/blob/main/.github/CONTRIBUTING.md). Also see our [Developer Guide to Getting Started](https://github.com/SAP/fundamental-react/wiki/Developer-Guide).

## Similar Projects

-   [Angular implementation of SAP Fundamental Styles](https://github.com/SAP/fundamental-ngx)
-   [Vue implementation of SAP Fundamental Styles](https://github.com/SAP/fundamental-vue)
