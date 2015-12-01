let UserHomeController = function($cookies) {
  let token=$cookies.get('auth_token');
  let user =$cookies.get('username');


};

UserHomeController.$inject = ['$cookies'];

export default UserHomeController;