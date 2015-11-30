import $ from 'jQuery';

let ListController = function() {
  
  let vm = this;
  vm.haveItem = haveItem;
  vm.removeItem = removeItem;

  function haveItem() {
    $(this).parent('li').addClass('crossOut');
  }

  function removeItem() {
    console.log('bye');
  }

};

ListController.$inject = [];

export default ListController;