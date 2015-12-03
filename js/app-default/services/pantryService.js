let PantryService = function($http, SERVER, $cookies) {


  let url = SERVER.URL;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;


  this.addItem = addItem;
  this.getPantryList = getPantryList;
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
    return $http.post(url + '/edible', i, SERVER.CONFIG);
  }

  function getPantryList () {
    return $http.get(url + '/edible' , SERVER.CONFIG);
  }

  function removeFood (objId) {
    return $http.delete(url + '/edible/' + objId, SERVER.CONFIG);
  }

};

PantryService.$inject = ['$http', 'SERVER', '$cookies'];

export default PantryService;

