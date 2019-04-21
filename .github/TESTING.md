# Testing and CI

This package uses jest as the testing framework, and CircleCI as the Continuous Integration tool
that handles running tests on pull requests and automatic deployment.


Each module will have its own directory to write the tests.
For example, tests for the 'set' module are written under 'tests/set/'.

Usually, the 'index.test.js' file will container the test suite for the module's main functions.
