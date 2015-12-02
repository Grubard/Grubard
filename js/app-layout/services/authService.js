let AuthService = function($cookies){
  this.authenticate = authenticate;
  function authenticate (){

    let token = $cookies.get('auth_token');
    if(token){
      return true;
    } else{
      return false;
    }
  }

};
AuthService.$inject= ['$cookies'];
export default AuthService;