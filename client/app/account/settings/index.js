'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('a2App.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
