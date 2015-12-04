import $ from 'jQuery';

let LoginController = function($state, $http, $cookies, AuthService){
  


  let vm = this;
  let url='http://intense-refuge-9476.herokuapp.com';

  vm.showCreateNew = showCreateNew;
  vm.createSmartCart = createSmartCart;

  function showCreateNew () {
    $('.logIn').addClass('hidden');
    $('.newSmartCart').addClass('shown');
    $('.newButton').addClass('hidden');
  }
  let House = function(obj){
    this.name = obj.name;
    this.address= obj.address;
  };
  function createSmartCart (house) {
    let x = new House(house);
    $('.createAcct').addClass('shown');
    $('.newSmartCart').addClass('hidden');
    
    $http.post(url+'/house', x).then((res)=>{
      console.log(res);
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7);
      let id = res.data.house.id;
      $cookies.put('house_id', id, {expires: expireDate});
    });
  }


  vm.login = function(user){
    console.log(user);
    
    $http.post(url+'/login', user).then((res)=>{
      
      
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7);
      $cookies.put('auth_token', res.data.user.access_token, {expires: expireDate});
      $cookies.put('username', res.data.user.username, {expires: expireDate});
      
      $state.transitionTo('root.home');

    });
    
    
  };
  vm.signUp = function(newUser){
    console.log(newUser);
    let id = $cookies.get('house_id');
    $http.post(url+'/signup/'+ id, newUser).then((res)=>{
      console.log(res);
      $cookies.put('auth_token', res.data.user.access_token);
      $cookies.put('username', res.data.user.username);
      $state.transitionTo('root.home');
    });
    $('.createAcct').addClass('hidden');
    $('.addOthers').addClass('shown');
  };


};

LoginController.$inject = ['$state', '$http', '$cookies', 'AuthService'];
export default LoginController;