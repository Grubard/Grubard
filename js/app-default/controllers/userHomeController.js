import $ from 'jquery';
let UserHomeController = function($cookies, ListService, PantryService, $scope) {
  let vm = this;

  

  $('.grocTitle').click(function(){
    $('.grocTitle').addClass('dark').removeClass('lighten');
    $('.groceryList').removeClass('hidden');
    $('.pantryList').addClass('hidden');
    $('.pantryTitle').removeClass('dark').addClass('lighten');
  });

  $('.pantryTitle').click(function(){
    $('.pantryTitle').addClass('dark').removeClass('lighten');
    $('.pantryList').removeClass('hidden');
    $('.groceryList').addClass('hidden');
    $('.grocTitle').removeClass('dark').addClass('lighten');

  });

  groceryList();
  function groceryList() {
    ListService.getGroceryList().then( (response) => {
      console.log(response);
      vm.items = response.data;
      
    });

  }
  pantryList();
  function pantryList() {
    PantryService.getPantryList().then( (response) => {
      console.log(response);
      vm.pantryItems = response.data;
    });
  }
  $scope.sort = {
    column: '',
    descending: false
  };    

  vm.sortBy = function(column) {

    var sort = $scope.sort;

    if (sort.column === column) {
      sort.descending = !sort.descending;
    } else {
      sort.column = column;
      sort.descending = false;
    }
  };

  vm.sortPantry = function(column) {

    var sort = $scope.sort;

    if (sort.column === column) {
      sort.descending = !sort.descending;
    } else {
      sort.column = column;
      sort.descending = false;
    }
  };     
};

UserHomeController.$inject = ['$cookies', 'ListService', 'PantryService', '$scope'];

export default UserHomeController;