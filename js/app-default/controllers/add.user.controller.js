let AddUserController = function($state, $http, $cookies){
  let vm = this;
  vm.addUser= function(user){
    console.log(user);
  };
};
AddUserController.$inject = ['$state', '$http', '$cookies'];
export default AddUserController;