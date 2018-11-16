# Unit Testing

To help improve the stability of the Fundamental React components, unit testing and code coverage reports are created using [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)

- [Set-up](#set-up)
- [Running Tests and Code Coverage](#running-tests-and-code-coverage)
- [Creating a unit test](#creating-a-unit-test)

## Set-up

To ensure that you have the proper npm modules installed for unit testing, from the terminal window:
`npm install`

## Running Tests and Code Coverage

Configuration is setup to look for .test.js files in the /src/ directory.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm test -- --coverage`

Launches the test runner and display code coverage report. The code coverage report will only be applied to the Components main .js file. Coverage reports will not be created for .Component.js files.

#### `npm test -- --coverage --watch`

Launches the test runner and display code coverage report as well starts interactive watch mode.

## Creating a Unit Test

Depending on the component, there are different approaches to creating unit tests. The easiest way to make sure that a component is rendered with the desired output is by creating a [snapshot](https://jestjs.io/docs/en/tutorial-react#snapshot-testing). The first time a snapshot is created it will render the component based off the prop values sent to the component. Each subsequent unit test will check against the snapshot to make sure the component is rendering exactly as before.

Testing user interaction of a component can be done with Enzyme and Jest. Please refer to [Enzyme's documentation](https://github.com/airbnb/enzyme#basic-usage) on how to interact with the DOM.
