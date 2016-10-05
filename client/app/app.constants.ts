'use strict';
const angular = require('angular');

export default angular.module('a3App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
