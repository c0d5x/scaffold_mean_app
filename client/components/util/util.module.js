'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('a2App.util', [])
  .factory('Util', UtilService)
  .name;
