let run = function($rootScope, $cookies, $state, AuthService, $stateParams) {

  $rootScope.$on('$viewContentLoaded', function (event, data) {
    $(document).foundation();
  });
<<<<<<< HEAD

  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){

    let x = AuthService.authenticate();
    console.log("w:", x);
    
    if(toState.authenticate && x === true){
      return;
    }
    if (toState.authenticate && x === false ){

      console.log('wat');
      
      $state.transitionTo("root.login");

      event.preventDefault();
      
    }
  
=======
  $rootScope.$on('$stateChangeSuccess', function(){
    let token = $cookies.get('auth_token');
    if(!token){
      alert("Uh oh! Looks like you aren't logged in.");
      $state.go('root.login');
    }
>>>>>>> 5df73aeccd6454e84ae207296815f36a140a36c7
   
  });
  
};

  
  

run.$inject = ['$rootScope', '$cookies', '$state', 'AuthService', '$stateParams'];

export default run;