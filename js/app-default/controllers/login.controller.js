import $ from 'jQuery';

let LoginController = function($state, $http, $cookies, AuthService){
  


  let vm = this;
  let url='http://intense-refuge-9476.herokuapp.com';

  vm.showCreateNew = showCreateNew;
  vm.createSmartCart = createSmartCart;

  function showCreateNew () {
    $('.logIn').addClass('hidden');
    $('.newSmartCart').addClass('shown');
    $('.newButton').addClass('hidden');
  }

  function createSmartCart () {
    $('.createAcct').addClass('shown');
    $('.newSmartCart').addClass('hidden');
  }


  vm.login = function(user){
    console.log(user);
    
    $http.post(url+'/login', user).then((res)=>{
      
    
      
      $cookies.put('auth_token', res.data.user.access_token);
      $cookies.put('username', res.data.user.username);
      
      $state.transitionTo('root.home');

    });
    
    
  };
  vm.signUp = function(newUser){
    console.log(newUser);
    $http.post(url+'/signup', newUser).then((res)=>{
      console.log(res);
      $cookies.put('auth_token', res.data.user.access_token);
      $cookies.put('username', res.data.user.username);
      $state.transitionTo('root.home');
    });
    $('.createAcct').addClass('hidden');
    $('.addOthers').addClass('shown');
  };


};

LoginController.$inject = ['$state', '$http', '$cookies', 'AuthService'];
export default LoginController;