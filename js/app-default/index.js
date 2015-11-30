import angular from 'angular';
import '../app-core/index';

/////** Import Controllers, Services, and Directives **/////
import UserHomeController from './controllers/userHomeController';
import ListController from './controllers/listController';
// import ... from './services/...';
// import ... from './directives/...';

angular
  .module('app.default', ['app.core'])
  
  /////** Load Controllers, Services, and Directives **/////
  .controller('UserHomeController', UserHomeController)
  .controller('ListController', ListController)
  // .service('...', ...)
  // .directive('...', ...)
;
  