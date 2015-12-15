import $ from 'jQuery';

let LoginController = function($state, $http, $cookies, AuthService, SERVER, LoginService, $rootScope, $scope){

  let url = SERVER.URL;


  let vm = this;

  vm.showCreateNew = showCreateNew;
  vm.createSmartCart = createSmartCart;
  vm.addOtherUsers = addOtherUsers;

    
  function showCreateNew () {
    $('.logIn').addClass('hidden');
    $('.createAcct').addClass('shown');
    $('.newButton').addClass('hidden');
  }

  vm.signUp = function(newUser){
    $http.post(url+'/signup/', newUser).then((res)=>{
      console.log(res.data);
      $cookies.put('auth_token', res.data.user.access_token);
      $cookies.put('username', res.data.user.username);
      $rootScope.$broadcast('LoggedIn');
    });
    $('.createAcct').addClass('hidden');
    $('.newSmartCart').addClass('shown');
  };



  function createSmartCart (house) {
    // console.log(house);
    LoginService.createNewSmartCart(house).then( (res)=> {
      
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7);
      let id = res.data.house.id;
      let houseName = res.data.house.name;
      $cookies.put('house_id', id, {expires: expireDate}); 
      $cookies.put('house_name', houseName, {expires: expireDate});
      $rootScope.$broadcast('newHouse');
    });

    $('.addOthers').addClass('shown');
    $('.finishButton').addClass('shown');
    $('.newSmartCart').addClass('hidden');
  }
  function addOtherUsers(friends){
    LoginService.addYoFriends(friends).then((res)=>{
      console.log(res);
    });
    friends.username= '';
    friends.password= '';
  }

  vm.login = function(user){
    $scope.loading = true;
    $http.post(url+'/login', user).then((res)=>{
            
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7);
      $cookies.put('auth_token', res.data.user.access_token, {expires: expireDate});
      $cookies.put('username', res.data.user.username, {expires: expireDate});
      console.log('the user man: ', res);
      $rootScope.$broadcast('LoggedIn');
      $state.transitionTo('root.home');
    });  
  };


};

LoginController.$inject = ['$state', '$http', '$cookies', 'AuthService', 'SERVER', 'LoginService', '$rootScope', '$scope'];
export default LoginController;