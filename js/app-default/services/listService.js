let ListService = function($http, SERVER, $cookies) {


  let url = SERVER.URL;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;


  this.addItem = addItem;
  this.getGroceryList = getGroceryList;
  this.removeFood = removeFood;

  function Item (foodItem) {
    this.title = foodItem.title;
    this.quantity = foodItem.quantity;
    this.category = foodItem.category;
    this.preferred = foodItem.preferred;
    this.necessity = foodItem.necessity;
  }

  function addItem (foodItem) {
    let i = new Item(foodItem);
    return $http.post(url + '/grocery', i, SERVER.CONFIG);
  }

  function getGroceryList () {
    return $http.get(url + '/grocery' , SERVER.CONFIG);
  }

  function removeFood (objId) {
    return $http.delete(url + '/grocery/' + objId, SERVER.CONFIG);
  }

};

ListService.$inject = ['$http', 'SERVER', '$cookies'];

export default ListService;

