let LayoutController = function($cookies, $state){
  let vm = this;

  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $state.go('landing');
  };

};

LayoutController.$inject = ['$cookies', '$state'];

export default LayoutController;