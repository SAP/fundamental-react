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

## Viewing results

You can view a nice visual representation of the code coverage status as well as see what lines are missing coverage. In the repository of your fundamental-react project navigate to <directory of fundamental-react>/coverage/lcov-report/index.html. From here you can click on the component name you want to view coverage for view the lines covered in the JS file. Placing your mouse over a highlighted line of code will display a tooltip.

## Common issues

### Invariant Violation: Target container is not a DOM element.

This issue is usually caused because the modules being imported are not properly defined. An example of improperly defining modules to be imported is by grouping all the components needed and just referencing the whole library.

Ex: `import {Popover, Time} from '../';`

The correct solution is to import the modules from their defined location.
<br/><br/>
Ex: `import {Popover} from '../Popover/Popover'; import {Time} from '../Time/Time';`
