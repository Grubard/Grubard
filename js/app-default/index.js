import angular from 'angular';
import 'angular-cookies';
import '../app-core/index';

/////** Import Controllers, Services, and Directives **/////
import AuthService from '../app-layout/services/authService';

// import ... from './controllers/...';
import LoginController from './controllers/login.controller';
import UserHomeController from './controllers/userHomeController';
import ListController from './controllers/listController';
import AddUserController from './controllers/add.user.controller';
import pantry from './directives/pantry.dir';
// import ... from './directives/...';

angular
  .module('app.default', ['app.core', 'ngCookies'])
  .service('AuthService', AuthService)
  /////** Load Controllers, Services, and Directives **/////
  .controller('LoginController', LoginController)
  .controller('UserHomeController', UserHomeController)
  .controller('ListController', ListController)
  .controller('AddUserController', AddUserController)
  .directive('pantry', pantry)
  // .directive('...', ...)
;
  