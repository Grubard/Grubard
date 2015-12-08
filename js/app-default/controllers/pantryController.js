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

  vm.cancelChange = cancelChange;
  vm.editItem = editItem;
  vm.saveNewChanges = saveNewChanges;
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

  function cancelChange () {
    $state.reload();
  }


  function editItem (object){
    let objId = object.id;
    console.log(objId);
    $('.editItem').addClass('showEditForm');
    $('.pantryListItem').addClass('editItem');
  }

  function saveNewChanges() {
    console.log('good job');
  }

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