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
  .state('root.home', {
    url: '/',
    // controller: '... as vm',
    templateUrl: 'templates/tpl-app/home.tpl.html'
  });
  /////** Add new .states here **/////

  // Allows the use of HTML5 stuff (Will help remove hashtags from routes)
  $locationProvider.html5Mode(true);
};

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default config;