let LoginController = function($state, $http, $cookies){
  let vm = this;
  vm.login = function(user){
    console.log(user);
    //$http.post...
    //$cookies.set...
    $state.go('root.home');
  };
  vm.signUp = function(newUser){
    console.log(newUser);
    //$http.post...
    //$cookies.set...
    $state.go('root.home');
  };
};

LoginController.$inject = ['$state', '$http', '$cookies'];
export default LoginController;