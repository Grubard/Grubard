import angular from 'angular';
import 'angular-cookies';
import '../app-core/index';

/////** Import Controllers, Services, and Directives **/////


// import ... from './controllers/...';
import LoginController from './controllers/login.controller';
import UserHomeController from './controllers/userHomeController';
import ListController from './controllers/listController';
import AddUserController from './controllers/add.user.controller';
import user from './directives/user.dir';
import alert from './directives/alert.dir';
// import ... from './directives/...';

angular
  .module('app.default', ['app.core', 'ngCookies'])
  
  /////** Load Controllers, Services, and Directives **/////
  .controller('LoginController', LoginController)
  .controller('UserHomeController', UserHomeController)
  .controller('ListController', ListController)
  .controller('AddUserController', AddUserController)
  .directive('user', user)
  .directive('alert', alert)
  // .directive('...', ...)
;
  