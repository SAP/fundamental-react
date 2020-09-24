# Contributing to Fundamental-react

We're excited that you're interested in contributing to Fundamental-react! Your contribution can make this library even better. Please read the guidelines regarding contributions:

- [Issues and Bugs](#issues-and-bugs)
- [Feature Requests](#feature-requests)
- [Contribute Code](#contribute-code)

## Issues and Bugs

If you find a bug or some other issue with any part of the library, please [submit an issue](https://github.com/SAP/fundamental-react/issues). Before doing so, please make sure that:

- The issue is not a duplicate issue.
- The issue has not been fixed in a newer release of the library.
- The issue is reproducible.
- Your explanation is clear and complete.
- You provide example code and/or screenshots (recommended).

If you meet the above criteria, you can submit issues with our [GitHub issue tracker](https://github.com/SAP/fundamental-react/issues/new).

## Feature Requests

You can also use the issue tracker to request a new feature or enhancement. Even if you want to implement the feature yourself, please first submit an issue detailing your proposal so that we may discuss it with you and the community before moving forward.

## Contribute Code

You are welcome to contribute code to Fundamental-react in order to fix issues or to add new features.

Important things to consider:

*  You must be aware of the Apache License (which describes contributions) and **accept the Developer Certificate of Origin**. This is common practice in major Open Source projects. To make this process as simple as possible, we are using *[CLA assistant](https://cla-assistant.io/)* for individual contributions. CLA assistant is an open source tool that integrates with GitHub very well and enables a one-click experience for accepting the CLA.
*  You must follow **code style, quality, and product standards requirements**. You can find more information on the coding guidelines below.

### Developer Certificate of Origin (DCO)

Due to legal reasons, contributors will be asked to accept a DCO before they submit the first pull request to this projects, this happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

### Contribution Content Guidelines

You must follow the coding style as best you can when submitting code. Take note of naming conventions, separation of concerns, and formatting rules. Fundamental-react uses [EsLint](https://eslint.org/) to enforce code standards. See our [Developer Guide](https://github.com/SAP/fundamental-react/wiki/Developer-Guide) for more information.

### Testing Suite

All components should have associated unit tests created with a code coverage score of at least 85%. Be an overachiever and shoot for 100% :) 
Components also have visual regression tests enabled. [Learn how to add to our testing suite](https://github.com/SAP/fundamental-react/wiki/Testing)

### How to contribute - the Process

1.  Make sure the issue you've filed in the [issue tracker] has the label "contribution welcome" - otherwise, it is not ready to be worked on.
1.  Fork the Fundamental-react repository to your GitHub account.
1.  Create a branch for your issue or feature, and commit or push your changes on that branch.
1.  Create a Pull Request from your forked repository to github.com/SAP/fundamental-react. In the subject of the pull request, use "fix:" to denote a bug fix, "feat:" to denote an enhancement or "chore:" for small configuration updates and briefly describe the bug fix or enhancement you're contributing. In the pull request description, please provide a link to the issue in the issue tracker.
1.  Follow the link posted by the CLA assistant to your pull request and accept it, as described above.
1.  Wait for our code review and approval. We may ask you for additional commits, or make changes to your pull request ourselves.
    - Note that the Fundamental-react developers also have their regular duties so, depending on the required effort for reviewing, testing, and clarification, this may take a while.
1.  Once the change has been approved, an admin will merge the pull request into master on your behalf. You can then delete the now obsolete branch.
