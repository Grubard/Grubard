import angular from 'angular';
import 'angular-cookies';
import '../app-core/index';
import 'checklist-model';


import LoginController from './controllers/login.controller';
import UserHomeController from './controllers/userHomeController';
import ListController from './controllers/listController';
import PantryController from './controllers/pantryController';
import AddUserController from './controllers/add.user.controller';
import AddRecipe from './controllers/recipeController';
import SingleRecipe from './controllers/singleRecipe.controller';

import LoginService from './services/loginService';
import ListService from './services/listService';
import PantryService from './services/pantryService';
import TransferService from './services/transferService';

import user from './directives/user.dir';
import alert from './directives/alert.dir';
import addUser from './directives/adduser.dir';
import userList from './directives/userlist.dir';

angular
  .module('app.default', ['app.core', 'ngCookies', 'checklist-model'])
  .constant('SERVER', {
    URL:'https://intense-refuge-9476.herokuapp.com',
    CONFIG: {
      headers: {}
    }
  })

  .controller('LoginController', LoginController)
  .controller('UserHomeController', UserHomeController)
  .controller('ListController', ListController)
  .controller('PantryController', PantryController)
  .controller('AddUserController', AddUserController)
  .controller('AddRecipe', AddRecipe)
  .controller('SingleRecipe', SingleRecipe)
  .service('LoginService', LoginService)
  .service('ListService', ListService)
  .service('PantryService', PantryService)
  .service('TransferService', TransferService)
  .directive('user', user)
  .directive('alert', alert)
  .directive('addUser', addUser)
  .directive('userList', userList)
;
  