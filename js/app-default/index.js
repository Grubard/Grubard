import angular from 'angular';
import 'angular-cookies';
import '../app-core/index';

<<<<<<< HEAD
/////** Import Controllers, Services, and Directives **/////
import AuthService from '../app-layout/services/authService';

// import ... from './controllers/...';
=======

>>>>>>> 5df73aeccd6454e84ae207296815f36a140a36c7
import LoginController from './controllers/login.controller';
import UserHomeController from './controllers/userHomeController';
import ListController from './controllers/listController';
import AddUserController from './controllers/add.user.controller';

import ListService from './services/listService';


import user from './directives/user.dir';
import alert from './directives/alert.dir';
import addUser from './directives/adduser.dir';
import userList from './directives/userlist.dir';

angular
  .module('app.default', ['app.core', 'ngCookies'])
<<<<<<< HEAD
  .service('AuthService', AuthService)
  /////** Load Controllers, Services, and Directives **/////
=======
  .constant('SERVER', {
    URL:'http://intense-refuge-9476.herokuapp.com',
    CONFIG: {
      headers: {}
    }
  })

>>>>>>> 5df73aeccd6454e84ae207296815f36a140a36c7
  .controller('LoginController', LoginController)
  .controller('UserHomeController', UserHomeController)
  .controller('ListController', ListController)
  .controller('AddUserController', AddUserController)
  .service('ListService', ListService)
  .directive('user', user)
  .directive('alert', alert)
  .directive('addUser', addUser)
  .directive('userList', userList)
;
  