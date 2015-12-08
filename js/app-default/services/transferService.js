import $ from 'jquery';
let TransferService = function($http, SERVER, $cookies){
  let url = SERVER.URL ;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;
  this.transferItems = transferItems;
  
  function transferItems(pantry){
    $http.get(url + '/grocery' , SERVER.CONFIG).then((res)=>{

      let groceries = res.data;
      let grocNames = [];
      groceries.map(function(name){
        grocNames.push(name.title);
      });

      pantry.map(function(panItem){
        if(panItem.quantity < panItem.preferred && panItem.necessity === true){
          let yay = $.inArray(panItem.title, grocNames);
          
          if(yay === -1){
            $http.post(url + '/grocery', panItem, SERVER.CONFIG).then((res)=>{
              
            });
          }
        }
        
      });

    });
  }
  

};

TransferService.$inject=['$http', 'SERVER', '$cookies'];

export default TransferService;