'use strict';
const angular = require('angular');
import {UtilService} from './util.service';

export default angular.module('a3App.util', [])
  .factory('Util', UtilService)
  .name;
