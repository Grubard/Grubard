let LoginController = function($state, $http, $cookies){
  let vm = this;
  let url='https://git.heroku.com/intense-refuge-9476.git';
  vm.login = function(user){
    console.log(user);
    
    $http.post(url, user).then((res)=>{
      console.log(res);
    });
    //$cookies.set...
    $state.go('root.home');
  };
  vm.signUp = function(newUser){
    console.log(newUser);
    $http.post(url, newUser).then((res)=>{
      console.log(res);
    });
    //$cookies.set...
    $state.go('root.home');
  };
};

LoginController.$inject = ['$state', '$http', '$cookies'];
export default LoginController;