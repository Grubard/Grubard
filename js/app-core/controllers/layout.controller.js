let LayoutController = function($cookies, $state){
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

LayoutController.$inject = ['$cookies', '$state'];

export default LayoutController;