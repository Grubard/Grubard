let LoginService = function($http, SERVER, $cookies) {
  


  let vm = this;
  vm.createNewSmartCart = createNewSmartCart;


  let House = function(house){
    this.name = house.name;
    this.address= house.address;
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
};

LoginService.$inject = ['$http', 'SERVER', '$cookies'];

export default LoginService;