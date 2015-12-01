import $ from 'jQuery';

let ListController = function($scope) {
  

  let vm = this;
  vm.removeItem = removeItem;
  vm.addItemsToPantry = addItemsToPantry;
  vm.clearCompleted = clearCompleted;
  vm.editItem = editItem;
  vm.addNewItem = addNewItem;


  // Dummy data used here
  vm.items = [
    {item: "Bread"},
    {item: "Pickles"},
    {item: "Chicken"}
  ];

  function addNewItem (text) {
    let newItem = {item: text};
    vm.items.push(newItem);
    $scope.text = '';
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

ListController.$inject = ['$scope'];

export default ListController;