import angular from 'angular';
import 'angular-cookies';
import '../app-core/index';

/////** Import Controllers, Services, and Directives **/////
// import ... from './controllers/...';
import LoginController from './controllers/login.controller';
// import ... from './services/...';
// import ... from './directives/...';

angular
  .module('app.default', ['app.core', 'ngCookies'])
  .controller('LoginController', LoginController)
  
  /////** Load Controllers, Services, and Directives **/////
  // .controller('...', ...)
  // .service('...', ...)
  // .directive('...', ...)
;
  