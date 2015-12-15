let LayoutController = function($cookies, $state, $rootScope){
  let vm = this;
  $rootScope.$on('LoggedIn', function(){

    let name = $cookies.get('username');
    vm.name = name;
    
  });
  $rootScope.$on('newHouse', function(){

    vm.house = $cookies.get('house_name');
  });
  
  

  

  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $cookies.remove('house_id');
    $cookies.remove('house_name');
    $state.go('landing');
  };

};

LayoutController.$inject = ['$cookies', '$state', '$rootScope'];

export default LayoutController;