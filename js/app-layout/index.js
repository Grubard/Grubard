import angular from 'angular';
import AuthService from './services/authService';
/////** Import Controllers **/////
// import ... from './controllers/...';
import 'angular-cookies';
angular
  .module('app.layout', ['ngCookies'])
  .service('AuthService', AuthService)
  
  /////** Load Controllers **/////
  // .controller('...', ...)
;