let LoginController = function($state, $http, $cookies){
  let vm = this;
  let url='http://intense-refuge-9476.herokuapp.com';
  vm.login = function(user){
    console.log(user);
    
    $http.post(url+'/login', user).then((res)=>{
      console.log(res.data.user.username);
      $cookies.put('auth_token', res.data.user.access_token);
      $cookies.put('username', res.data.user.username);
    });
    
    $state.go('root.home');
  };
  vm.signUp = function(newUser){
    console.log(newUser);
    $http.post(url+'/signup', newUser).then((res)=>{
      console.log(res);
      $cookies.put('auth_token', res.data.user.access_token);
      $cookies.put('username', res.data.user.username);
    });
    $state.go('root.home');
  };


};

LoginController.$inject = ['$state', '$http', '$cookies'];
export default LoginController;