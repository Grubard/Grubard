import angular from 'angular';
import 'angular-cookies';
import '../app-core/index';

/////** Import Controllers, Services, and Directives **/////


// import ... from './controllers/...';
import LoginController from './controllers/login.controller';
import UserHomeController from './controllers/userHomeController';
import ListController from './controllers/listController';

// import ... from './services/...';
// import ... from './directives/...';

angular
  .module('app.default', ['app.core', 'ngCookies'])
  
  /////** Load Controllers, Services, and Directives **/////
  .controller('LoginController', LoginController)
  .controller('UserHomeController', UserHomeController)
  .controller('ListController', ListController)
  // .service('...', ...)
  // .directive('...', ...)
;
  