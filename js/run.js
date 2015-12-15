let run = function($rootScope, $cookies, $state, AuthService, $stateParams) {

  $rootScope.$on('$viewContentLoaded', function (event, data) {
    $(document).foundation();
  });


  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){

    let x = AuthService.authenticate();
    console.log("w:", x);
    
    if(toState.authenticate && x === true){
      setTimeout(function(){
        $rootScope.$broadcast('LoggedIn');
        $rootScope.$broadcast('newHouse');
      }, 100);
      return;
    }
    if (toState.authenticate && x === false ){

      console.log('wat');
      
      $state.transitionTo("root.login");

      event.preventDefault();
      
    }
  
   
  });
  
};

  
  

run.$inject = ['$rootScope', '$cookies', '$state', 'AuthService', '$stateParams'];

export default run;