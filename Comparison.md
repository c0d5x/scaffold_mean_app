# CircleCI vs TravisCI vs CodeShip vs Jenkins

## Abstract
The idea for this document is to help you decide which of these four Continuous Integration systems to use depending on
your priorities, using an scaffold application created with [a
generator](https://github.com/DaftMonk/generator-angular-fullstack). The application uses `nodejs 4.4.6`, `npm`, `gulp`
and connects to `mongod`. This document does not cover the delivery process.

## Summary
Continuous Integration and Unit Testing are two critical processes in the development life cycle of every software
project, so the question is not if it should be done, but how it should be done. Luckily there are plenty of options
available for free(for open source projects). This comparison shows how easy/hard it was to make each option work, and
what considerations you should have when you deploy a similar application.

## Evaluation Method
The following aspects are evaluated on each system:

1. Complexity for registering and authorizing users
2. Complexity for creating the project and running basic tests
3. Complexity for connecting services, mongod in this case
4. Performance considered as time it takes to run the operations
5. UI/UX satisfaction ( in the opinion of the author )
6. Pricing (although evaluation used free offerings only)

Each system is going to be configured so that builds are triggered when changes are commited, then performance and UI/UX is evaluated. Ten iterations will be considered to get the average performance without changing the code.

## Test Program
The scaffold application is tested by timing these operations:

### Preparation
1. rm -rf node_modules
2. npm install --no-optional

### Unit Testing
1. npm test

### Build
1. gulp build

Some systems require additional operations like installing underlying software, that time is considered as part of their performance evaluation.

##
