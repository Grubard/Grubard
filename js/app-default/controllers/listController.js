import $ from 'jQuery';

let ListController = function() {
  

  let vm = this;
  vm.removeItem = removeItem;
  vm.addItemsToPantry = addItemsToPantry;
  vm.clearCompleted = clearCompleted;
  vm.editItem = editItem;


  // Dummy data used here
  vm.items = [
    {item: "Bread"},
    {item: "Pickles"},
    {item: "Chicken"}
  ];

  function editItem (object){
    // Edit item on double click
    console.log('hi');
  }

  function removeItem(items, object) {
    console.log('bye');
    // vm.items.delete();
  }

  function addItemsToPantry() {
    console.log('ok');
    // vm.items.post()
  }

  function clearCompleted() {
    console.log('asdf');
  }

};

ListController.$inject = [];

export default ListController;