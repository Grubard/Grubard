let LayoutController = function($cookies, $state, $rootScope){
  let vm = this;
  $rootScope.$on('LoggedIn', function(){

    let name = $cookies.get('username');
    vm.name = name;
    
  });
  
  
  
  

  

  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $cookies.remove('house_id');
    $state.go('landing');
  };

};

LayoutController.$inject = ['$cookies', '$state', '$rootScope'];

export default LayoutController;