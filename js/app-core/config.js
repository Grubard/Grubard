let config = function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/');

  // Set up some States
  $stateProvider

  .state('root', {
    abstract: true,
    templateUrl: 'templates/tpl-layout/layout.tpl.html',
    controller: 'LayoutController as vm'
   
  }) 
  .state('landing',{
    url: '/',
    templateUrl: 'templates/tpl-app/landing.tpl.html',
    authenticate: false
  })
  .state('root.login',{
    url: '/login',
    controller: 'LoginController as vm',
    templateUrl: 'templates/tpl-app/login.tpl.html',
    authenticate: false,
  })
  .state('root.home', {
    url: '/home',
    controller: 'UserHomeController as vm',
    templateUrl: 'templates/tpl-app/home.tpl.html',
    authenticate: true,
  })
  .state('root.list',{
    url: '/list',
    controller: 'ListController as vm',
    templateUrl: 'templates/tpl-app/list.tpl.html',
    authenticate: true
  })
  .state('root.pantry',{
    url: '/pantry',
    controller: 'PantryController as vm',
    templateUrl: 'templates/tpl-app/pantry.tpl.html',
    authenticate: true
  })
  .state('root.add',{
    url: '/addUser',
    controller: 'AddUserController as vm',
    templateUrl: 'templates/tpl-app/addUser.tpl.html',
    authenticate: true
  })
  .state('root.contact',{
    url: '/contact',
    templateUrl: 'templates/tpl-app/contact.tpl.html',
    authenticate: false
  })
  .state('root.about',{
    url: '/about',
    templateUrl: 'templates/tpl-app/about.tpl.html',
    authenticate: false
  })
  .state('root.account', {
    url: '/account',
    templateUrl: 'templates/tpl-app/accountSettings.tpl.html'
    
  });


};

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default config;