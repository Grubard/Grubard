import $ from 'jQuery';

let ListController = function($scope, $http, ListService, $state) {
  $('.addAGroc').click(function(){
    console.log('wat');
    $('.grocAddForm').addClass('showGrocForm');
  });
  $('.doneAddingGroc').click(function(){
    $('.grocAddForm').removeClass('showGrocForm');
    $state.reload();
  });

  let vm = this;
  vm.addItemsToPantry = addItemsToPantry;
  vm.clearCompleted = clearCompleted;
  vm.editItem = editItem;

  vm.removeItem = removeItem;
  vm.addNewItem = addNewItem;
  vm.groceryList = groceryList;

  function addNewItem (food) {
    ListService.addItem(food).then((response) => {
    });
    $scope.food = {};
  }



  groceryList();
  function groceryList() {
    ListService.getGroceryList().then( (response) => {
      console.log(response);
      vm.groceryList = response.data;
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
    console.log('hi');
  }

  function removeItem(items) {
    console.log('delete me');
  }

  function addItemsToPantry() {
    console.log('ok');
    // vm.items.post()
  }

  function clearCompleted() {
    console.log('asdf');
  }

};

ListController.$inject = ['$scope', '$http', 'ListService', '$state'];

export default ListController;