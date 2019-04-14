import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';

import { Config } from './config';
import { components } from './components/module';
import { services } from './services/module';

export const ims = angular
  .module('ims', [
    'ng',
    uiRouter,
    UI_ROUTER_REACT_HYBRID,
    components.name,
    services.name,
  ])
  .config(Config);
