import angular from 'angular';
import 'angular-ui-router';
import LayoutController from './controllers/layout.controller';
/////** Import Constants and Config **/////
// import ... from './constants/...';
import config from './config';
import 'angular-cookies';
import AuthService from '../app-layout/services/authService';
angular
  .module('app.core', ['ui.router'])  
  /////** Load Constants and Config **/////
  // .constant('...', ...)
  .controller('LayoutController', LayoutController)
  .config(config)
  .service('AuthService', AuthService)
;