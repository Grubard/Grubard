import $ from 'jQuery';

let ListController = function($scope, $http, ListService) {
  

  let vm = this;
  // vm.removeItem = removeItem;
  // vm.addItemsToPantry = addItemsToPantry;
  // vm.clearCompleted = clearCompleted;
  // vm.editItem = editItem;

  vm.addNewItem = addNewItem;
  vm.items = [];

  function addNewItem (food) {
    vm.items.push(food);
    ListService.addItem(food).then((response) => {
    });
    $scope.food = {};
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

ListController.$inject = ['$scope', '$http', 'ListService'];

export default ListController;