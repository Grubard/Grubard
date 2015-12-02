let run = function($rootScope, $cookies, $state) {

  $rootScope.$on('$viewContentLoaded', function (event, data) {
    $(document).foundation();
  });
  $rootScope.$on('$stateChangeSuccess', function(){
    let token = $cookies.get('auth_token');
    if(!token){
      alert("Uh oh! Looks like you aren't logged in.");
      $state.go('root.login')
    };
   
  });
  
};

run.$inject = ['$rootScope', '$cookies', '$state'];

export default run;