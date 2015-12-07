let TransferService = function($http, SERVER, $cookies){
  let url = SERVER.URL ;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;
  this.transferItems = transferItems;
  
  function transferItems(x){
    console.log(x);
    return function(x){
      if (x.quantity < x.preferred){
        $http.post(url + '/grocery', x, SERVER.CONFIG);
      }
    };
  }

};

TransferService.$inject=['$http', 'SERVER', '$cookies'];

export default TransferService;