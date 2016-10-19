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

1. **Initial Setup**: Complexity for creating the project and running basic tests
2. **Services**: Complexity for connecting services, mongod in this case
3. **Performance**: Considered as time it takes to run the operations
4. **UI/UX**: Satisfaction in the opinion of the author
5. **Pricing** (although evaluation used free offerings only)

Each system is going to be configured so that builds are triggered when changes are commited, then performance and UI/UX is evaluated. Ten iterations will be considered to get the average performance without changing the code.

## Test Program
These operations are considered as standard to build the application:

### Preparation
1. rm -rf node_modules
2. npm install --no-optional

### Unit Testing
1. npm test

### Build
1. gulp build

Some systems require additional operations like installing underlying software, that time is considered as part of their performance evaluation.

## CircleCI

### Initial Setup
Sign up requires only to authorize CircleCI against Github, then it shows you the list of repositories so you can create the project with a click. The system looks for a file called [circle.yml](https://github.com/c0d5x/scaffold_mean_app/blob/master/circle.yml) to determine what steps conform the build. The [documentation](https://circleci.com/docs/configuration/) is very helpful, providing many examples for the most common languages and features. Setting the node version only requires a statement.
**Rating: 10**


### Services
CircleCI provides many services out of the box, bounded to localhost, the list includes `Postgres, MySQL, MongoDB, Cassandra, redis, elasticsearch, rabbit-mq`, etc, so for this application nothing is required.
**Rating: 10**

### Performance
|Iteration|1|2|3|4|5|6|7|8|9|10|Average|
|---------|:-:||||||||||------:|
||1.1|1.2|1.3|1.4|1.5|1.6|1.7|1.8|1.9|2.0|**1.5**|

### UI/UX
#### ANSI Support
CircleCI correctly supports ANSI codes for different colors.
