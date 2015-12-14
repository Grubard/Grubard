import $ from 'jQuery';

let PantryController = function($scope, $http, PantryService, $state, TransferService) {
  

  let vm = this;
  // vm.addItemsToPantry = addItemsToPantry;
  // vm.clearCompleted = clearCompleted;

  vm.cancelChange = cancelChange;
  vm.editItem = editItem;
  vm.saveNewChanges = saveNewChanges;
  vm.removeItem = removeItem;
  vm.addNewItem = addNewItem;
  vm.pantryList = pantryList;

  $('.addItem').click(function(){
    $('.panAdd').addClass('displayPan');
  });
  $('.doneAdding').click(function(){
    $('.panAdd').removeClass('displayPan');
  });

  function addNewItem (food) {
    
    PantryService.addItem(food).then((response) => {
      $scope.$broadcast('newPantryItem');  

    });
    $scope.food = {};
  }



  pantryList();
  function pantryList() {
    PantryService.getPantryList().then( (response) => {
      vm.pantryList = response.data;
      TransferService.transferItems(vm.pantryList);
    });
    $scope.$on('newPantryItem', function(){
      PantryService.getPantryList().then( (response) => {
        vm.pantryList = response.data;
        TransferService.transferItems(vm.pantryList);
      });
    });
  }

  function removeItem (object) {
    
    PantryService.removeFood(object.id).then(()=>{
      $scope.$broadcast('newPantryItem');
    });
    
  }

  function cancelChange () {
    $state.reload();
  }

  function editItem (object){
    object.showEdit = true;
  }

  function saveNewChanges(object) {  
    PantryService.editFoodItem(object).then((response) => {
      $scope.$broadcast('newPantryItem');
    });
  }

  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $cookies.remove('house_id');
    $state.go('landing');
  };

  $scope.sort = {
    column: '',
    descending: false
  };
  vm.sortBy = function (column) {

    var sort = $scope.sort;

    if (sort.column === column) {
      sort.descending = !sort.descending;
    } else {
      sort.column = column;
      sort.descending = false;
    }
  };

  vm.sortPantry = function (column) {

    var sort = $scope.sort;

    if (sort.column === column) {
      sort.descending = !sort.descending;
    } else {
      sort.column = column;
      sort.descending = false;
    }
  };

};

PantryController.$inject = ['$scope', '$http', 'PantryService', '$state', 'TransferService'];

export default PantryController;