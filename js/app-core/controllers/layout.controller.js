let LayoutController = function($rootScope, $cookies, $state){
  let vm = this;
  let name = $cookies.get('username');
  vm.name = name;
  
  
  
  

  

  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $cookies.remove('house_id');
    $state.go('landing');
  };

};

LayoutController.$inject = ['$rootScope', '$cookies', '$state'];

export default LayoutController;