import $ from 'jQuery';

let ListController = function($scope, $http, ListService, $state, SERVER, $cookies) {
  $('.addAGroc').click(function(){
    console.log('wat');
    $('.grocAddForm').addClass('showGrocForm');
  });
  $('.doneAddingGroc').click(function(){
    $('.grocAddForm').removeClass('showGrocForm');
    $state.reload();
  });
  let items= [];

  let vm = this;
  let url = SERVER.URL;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;
  vm.addItemsToPantry = addItemsToPantry;
  vm.clearThese = clearThese;
  vm.editItem = editItem;

  vm.removeItem = removeItem;
  vm.addNewItem = addNewItem;
  vm.groceryList = groceryList;
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
    },100);
  }
  
  
  function editItem (object){
    // Edit item on double click
  }

<<<<<<< HEAD
 

=======
>>>>>>> 65e58330393c41fc2797605b02f98b7e336022b2

  function addItemsToPantry() {
    vm.purchased.map(function(x){
      $http.post(url + '/edible', x, SERVER.CONFIG).then((res)=>{
        console.log(res);
        ListService.removeFood(x.id);
        setTimeout( function() {
        $state.reload();
      },100);
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

};

ListController.$inject = ['$scope', '$http', 'ListService', '$state', 'SERVER', '$cookies'];

export default ListController;