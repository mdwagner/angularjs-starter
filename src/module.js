import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Config } from './config';

export const ims = angular
  .module('ims', [
    'ng',
    uiRouter
  ])
  .config(Config);
