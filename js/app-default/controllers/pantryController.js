import $ from 'jQuery';

let PantryController = function($scope, $http, PantryService, $state, TransferService) {
  
  $('.addItem').click(function(){
    $('.panAdd').addClass('displayPan');
  });
  $('.doneAdding').click(function(){
    $('.panAdd').removeClass('displayPan');
    $state.reload();
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
  }



  pantryList();
  function pantryList() {
    PantryService.getPantryList().then( (response) => {
      
      vm.pantryList = response.data;
      // vm.pantryList = [{title: 'beef', category: 'meats', quantity: '100', preferred: '900', necessity: 'true'}, {title: 'chicken', category: 'meats', quantity: '100', preferred: '10', necessity: 'true'},{title: 'wats', category: 'meats', quantity: '100', preferred: '900', necessity: 'true'}]

      
      TransferService.transferItems(vm.pantryList);
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

PantryController.$inject = ['$scope', '$http', 'PantryService', '$state', 'TransferService'];

export default PantryController;