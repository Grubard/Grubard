let UserHomeController = function($cookies, AuthService) {
  let token=$cookies.get('auth_token');
  let user =$cookies.get('username');


};

UserHomeController.$inject = ['$cookies', 'AuthService'];

export default UserHomeController;