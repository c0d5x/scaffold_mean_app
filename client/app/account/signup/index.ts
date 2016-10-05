'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('a3App.signup', [])
    .controller('SignupController', SignupController)
    .name;
