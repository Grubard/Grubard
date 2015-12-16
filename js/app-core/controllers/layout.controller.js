let LayoutController = function($cookies, $state, $rootScope, $http, LoginService){
  let vm = this;

  vm.showForm = showForm;
  vm.cancelForm = cancelForm;
  vm.cheese = true;

  $rootScope.$on('LoggedIn', function(){

    let name = $cookies.get('username');
    vm.name = name;
    
  });
  $rootScope.$on('newHouse', function(){

    vm.house = $cookies.get('house_name');
  });

  vm.changePass = function(pass){
    LoginService.changePassword(pass).then((res)=>{
      console.log(res);
      $('#passForm').removeClass('showChangePass');
    });
    $state.reload();

  };


  function showForm() {
    console.log('hi');
    vm.cheese = false;
  }

  function cancelForm() {
    $state.reload();
  }


  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $cookies.remove('house_id');
    $cookies.remove('house_name');
    $state.go('landing');
  };

};

LayoutController.$inject = ['$cookies', '$state', '$rootScope', '$http', 'LoginService'];

export default LayoutController;