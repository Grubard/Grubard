let UserHomeController = function($cookies) {
  let token=$cookies.get('auth_token');
  let user =$cookies.get('username');
  console.log(token);
  console.log(user);

};

UserHomeController.$inject = ['$cookies'];

export default UserHomeController;