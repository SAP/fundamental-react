# Fundamental React

[![npm version](https://badge.fury.io/js/fundamental-react.svg)](//www.npmjs.com/package/fundamental-react)
[![Minified Size](https://badgen.net/bundlephobia/min/fundamental-react)](https://bundlephobia.com/result?p=fundamental-react)
[![Minzipped Size](https://badgen.net/bundlephobia/minzip/fundamental-react)](https://bundlephobia.com/result?p=fundamental-react)
[![Build Status](https://travis-ci.org/SAP/fundamental-react.svg?branch=master)](https://travis-ci.org/SAP/fundamental-react)
[![Coverage Status](https://coveralls.io/repos/github/SAP/fundamental-react/badge.svg?branch=master)](https://coveralls.io/github/SAP/fundamental-react?branch=master)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)

## Description

The `fundamental-react` library is a set of [React](https://reactjs.org/) components built using [SAP Fundamental Styles](https://sap.github.io/fundamental-styles/).

The SAP Fundamental Styles library is a design system and HTML/CSS component library used to build modern product user experiences with the SAP look and feel.

## API Reference

See [Component Documentation](https://sap.github.io/fundamental-react/) for examples and API details.

## Requirements

You will need to install [Node and Node Package Manager](https://www.npmjs.com/get-npm).

## Getting Started

For an existing react application, follow the steps below:

1. Install `fundamental-react`.

    ```
    npm install fundamental-react
    ```

1. All components are currently packaged together with their respective `css`, you will need to edit your webpack configuration to handle these files. See [css-loader](https://github.com/webpack-contrib/css-loader).

1. Import components as needed. See [Component Documentation](https://sap.github.io/fundamental-react/) for examples and API details.
    ```javascript
    import { Alert } from 'fundamental-react/Alert';
    ```
    or
    ```javascript
    import { Alert } from 'fundamental-react';
    ```

    > **NOTE:** Importing from specific component is recommended. Doing so will bring in only the component you are using instead of the whole library, which will reduce your bundle size significantly.



## Versioning

The `fundamental-react` library follows [Semantic Versioning](https://semver.org/). These components strictly adhere to the `[MAJOR].[MINOR].[PATCH]` numbering system (also known as `[BREAKING].[FEATURE].[FIX]`).

Merges to the `master` branch will be published as a prerelease. Prereleases will include an **rc** version (_e.g._ `[MAJOR].[MINOR].[PATCH]-rc.[RC]`).

## Known Issues

Please see [Issues](https://github.com/SAP/fundamental-react/issues).

## Support

If you encounter an issue or want to request a feature, you can [create an issue](https://github.com/SAP/fundamental-react/issues/new).

## Contributing

If you want to contribute, please check the [Contribution Guidelines](https://github.com/SAP/fundamental-react/blob/master/.github/CONTRIBUTING.md). Also see our [Developer Guide to Getting Started](https://github.com/SAP/fundamental-react/wiki/Developer-Guide).

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This library is licensed under the Apache Software License, v. 2 except as noted otherwise in the [License File](https://github.com/SAP/fundamental-react/blob/master/LICENSE.txt).

## Similar Projects

-   [Angular implementation of SAP Fundamental Styles](https://github.com/SAP/fundamental-ngx)
-   [Vue implementation of SAP Fundamental Styles](https://github.com/SAP/fundamental-vue)
