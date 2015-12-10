import $ from 'jQuery';

let ListController = function($scope, $http, ListService, $state, SERVER, $cookies) {
  

  let url = SERVER.URL;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;
  

  let vm = this;

  vm.addItemsToPantry = addItemsToPantry;
  vm.clearThese = clearThese;
  vm.editItem = editItem;
  vm.removeItem = removeItem;
  vm.addNewItem = addNewItem;
  vm.groceryList = groceryList;
  

  let items= [];
  vm.purchased = [];



  function addNewItem (food) {
    ListService.addItem(food).then((response) => {
    });
    $scope.food = {};
  }


  groceryList();
  function groceryList() {
    ListService.getGroceryList().then( (response) => {
      console.log(response);
      vm.groceryListYay = response.data;
    });
  }

  function removeItem (object) {
    console.log(object.id);
    ListService.removeFood(object.id);
    setTimeout( function() {
      $state.reload();
    },1000);
  }
  
  
  function editItem (object){
    // Edit item on double click
  }



  function addItemsToPantry() {
    vm.purchased.map(function(x){
      $http.post(url + '/edible', x, SERVER.CONFIG).then((res)=>{
        ListService.removeFood(x.id);
        setTimeout( function() {
          $state.reload();
        },1000);
      });
    });  
  }
  
  function clearThese() {
    vm.purchased.map(function(x){
      ListService.removeFood(x.id);
      setTimeout( function() {
        $state.reload();
      },100);
    });
  }

  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $cookies.remove('house_id');
    $state.go('landing');
  };

};

ListController.$inject = ['$scope', '$http', 'ListService', '$state', 'SERVER', '$cookies'];

export default ListController;