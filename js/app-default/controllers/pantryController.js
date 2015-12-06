import $ from 'jQuery';

let PantryController = function($scope, $http, PantryService, $state) {
  
  $('.addItem').click(function(){
    $('.panAdd').addClass('displayPan');
  });
  $('.doneAdding').click(function(){
    $('.panAdd').removeClass('displayPan');
  });
  let vm = this;
  // vm.addItemsToPantry = addItemsToPantry;
  // vm.clearCompleted = clearCompleted;
  // vm.editItem = editItem;

  vm.removeItem = removeItem;
  vm.addNewItem = addNewItem;
  vm.pantryList = pantryList;

  function addNewItem (food) {
    PantryService.addItem(food).then((response) => {
    });
    $scope.food = {};
    $state.reload();
  }



  pantryList();
  function pantryList() {
    PantryService.getPantryList().then( (response) => {
      console.log(response);
      vm.pantryList = response.data;
    });
  }

  function removeItem (object) {
    console.log(object.id);
    PantryService.removeFood(object.id);
    setTimeout( function() {
      $state.reload();
    },100);
  }


  // function editItem (object){
  //   // Edit item on double click
  //   console.log('hi');
  // }

  // function removeItem(items) {
  //   console.log('delete me');
  // }

  // function addItemsToPantry() {
  //   console.log('ok');
  //   // vm.items.post()
  // }

  // function clearCompleted() {
  //   console.log('asdf');
  // }

};

PantryController.$inject = ['$scope', '$http', 'PantryService', '$state'];

export default PantryController;