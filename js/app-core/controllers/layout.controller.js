let LayoutController = function($cookies, $state, $rootScope, $http, LoginService){
  let vm = this;
  $rootScope.$on('LoggedIn', function(){

    let name = $cookies.get('username');
    vm.name = name;
    
  });
  $rootScope.$on('newHouse', function(){

    vm.house = $cookies.get('house_name');
  });
  
  $('.changePass').click(function(){
    $('.changePassForm').addClass('showChangePass');
  });
  $('.cancelPass').click(function(){
    $('.changePassForm').removeClass('showChangePass');
  });

  vm.changePass = function(pass){
    LoginService.changePassword(pass).then((res)=>{
      console.log(res);
      $('.changePassForm').removeClass('showChangePass');
    });

  };

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