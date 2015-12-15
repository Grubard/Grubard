let LoginService = function($http, SERVER, $cookies) {
  


  let vm = this;
  vm.createNewSmartCart = createNewSmartCart;
  vm.addYoFriends = addYoFriends;

  let House = function(house){
    this.name = house.name;
    this.address= house.address;
  };

  let Friend = function(friend){
    this.email = friend.email;
    this.username = friend.username;
    this.password = friend.password;
  };

  function createNewSmartCart(house) {
    let url = SERVER.URL;
    let token = $cookies.get('auth_token');
    SERVER.CONFIG.headers['Access-Token'] = token;
    let h = new House(house);
    console.log(SERVER.CONFIG);
    console.log('h:', h);
    return $http.post(url + '/house', h, SERVER.CONFIG);
  }
  function addYoFriends(friend){
    let url= SERVER.URL;
    let token = $cookies.get('auth_token');
    let houseId = $cookies.get('house_id');
    SERVER.CONFIG.headers['Access-Token'] = token;
    let f = new Friend(friend);
    return $http.post(url + '/signup/roommate', f, SERVER.CONFIG);
  }
};

LoginService.$inject = ['$http', 'SERVER', '$cookies'];

export default LoginService;