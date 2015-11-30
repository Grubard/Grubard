let config = function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/');

  // Set up some States
  $stateProvider
    // Main Root State
    // It is an abstract state because we want a nice way to 
    // manage our layout that will be on all child states
  .state('root', {
    abstract: true,
    templateUrl: 'templates/tpl-layout/layout.tpl.html'
  }) 
  .state('root.landing',{
    url: '/',
    // controller: '... as vm',
    templateUrl: 'templates/tpl-app/landing.tpl.html'
  })
  .state('root.login',{
    url: '/login',
    controller: 'LoginController as vm',
    templateUrl: 'templates/tpl-app/login.tpl.html'
  })
  .state('root.home', {
    url: '/home',
    controller: 'UserHomeController as vm',
    templateUrl: 'templates/tpl-app/home.tpl.html'
  })
  .state('root.list',{
    url: '/list',
    controller: 'ListController as vm',
    templateUrl: 'templates/tpl-app/list.tpl.html'
  })
  .state('root.pantry',{
    url: '/pantry',
    // controller: '... as vm',
    templateUrl: 'templates/tpl-app/pantry.tpl.html'
  })
  .state('root.add',{
    url: '/addUser',
    controller: 'AddUserController as vm',
    templateUrl: 'templates/tpl-app/addUser.tpl.html'
  });
  /////** Add new .states here **/////

  // Allows the use of HTML5 stuff (Will help remove hashtags from routes)
  $locationProvider.html5Mode(true);
};

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default config;