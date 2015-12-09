let AuthService = function($cookies, $rootScope){
  this.authenticate = authenticate;
  function authenticate (){

    let token = $cookies.get('auth_token');
    if(token){
      $rootScope.$broadcast('LoggedIn');
      return true;
    } else{
      return false;
    }
  }

};
AuthService.$inject= ['$cookies', '$rootScope'];
export default AuthService;