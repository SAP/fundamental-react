
Fundamental-react is a set of [React.JS](https://reactjs.org/) components implementation of [SAP Fiori Fundamentals library](https://sap.github.io/fundamental/).

**[Component Documentation](https://sap.github.io/fundamental-react/)**

## Current Version

```
0.0.8-beta
```

## Build Status
[![Build Status](https://travis-ci.org/SAP/fundamental-react.svg?branch=develop)](https://travis-ci.org/SAP/fundamental-react)

## Description

Fundamental-react is a set of [React.JS](https://reactjs.org/) components implementation of [SAP Fiori Fundamentals library](https://sap.github.io/fundamental/). SAP Fiori Fundamentals library is a Design System and HTML/CSS Component Library used to build modern Product User Experiences with the SAP look and feel. This will allow you to stay/use React for your application and get SAP look and feel.


## Requirements

To download and use Fundamental-react library, you first need to install the node package manager.
https://www.npmjs.com/get-npm

Some prior knowledge of React is required for using this library.

# Getting started

## Install

To download and use this library, you first need to install the node package manager - [npm](https://www.npmjs.com/get-npm).

1. Install Fiori Fundamentals:

`npm install --save fiori-fundamentals`

2. Install Fundamental-react:

`npm install --save fundamental-react`

[npm package for fundamental-react](https://www.npmjs.com/package/fundamental-react)

3. Include the Fiori Fundamentals CSS in your React application. In your App.css or App.scss file include the following lines:

```
$fd-icons-path: "~fiori-fundamentals/scss/icons/";
$fd-fonts-path: "~fiori-fundamentals/scss/fonts/";
@import '../node_modules/fiori-fundamentals/scss/all.scss';
```
 
You can now use the [Component Documentation](https://sap.github.io/fundamental-react/) to browse the components currently available with Fundamental Vue.  To use a Fundamental-react component, paste the desired code snippet from the Component Documentation and configure it as necessarry:

    
    ...
    <Button compact>Compact</Button>
    
    <Icon glyph="cart" size="l" />
    ...
    
    
## Available Scripts 

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload on changes.<br>
Lint errors are shown in the console.

`npm test`

Launches the test runner in the interactive watch mode.

`npm test -- --coverage`

Launches the test runner and display code coverage report.

`npm test -- --coverage --watch`

Launches the test runner and display code coverage report and interactive watch mode.

`npm run build`

Builds the app for production to the `build` folder.

## Known Issues

There are no known major issues.

## How to obtain support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-react/issues/new)

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](./CONTRIBUTING.md) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](https://github.com/SAP/fundamental-react/blob/master/LICENSE.txt)

## Similar Projects
- [GitHub repo of Angular implementation of SAP Fiori Fundamentals](https://github.com/SAP/fundamental-ngx)
- [GitHub repo of Vue implementation of SAP Fiori Fundamentals](https://github.com/SAP/fundamental-vue)

