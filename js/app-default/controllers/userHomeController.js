import $ from 'jquery';
let UserHomeController = function($cookies, ListService, PantryService, $scope, TransferService) {
  
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
      vm.items = response.data;
      vm.groceries = [];
      vm.items.forEach(function(groc){
        if(groc.necessity===false || groc.necessity === null){
          vm.groceries.push(groc);
        }
      });
    });
  }

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
  vm.sortSelfList= function(column){
    var sort = $scope.sort;

    if (sort.column === column) {
      sort.descending = !sort.descending;
    } else {
      sort.column = column;
      sort.descending = false;
    }
  };
  vm.transferred = [];
  vm.necessity = [];
  vm.produce = [];
  vm.deli = [];
  vm.meats = [];
  vm.spices = [];
  vm.baking = [];
  vm.breakfast = [];
  vm.snacks = [];
  vm.sweets = [];
  vm.grains = [];
  vm.frozen = [];
  vm.bevs = [];
  vm.hygiene = [];
  vm.household = [];
  vm.dairy = [];
  
  vm.other = [];
  vm.nonNecessity = [];

  

  pantryList();

  function pantryList() {
    PantryService.getPantryList().then( (response) => {
      
      vm.pantryItems = response.data;
      TransferService.transferItems(vm.pantryItems);
      let items = response.data;
      items.forEach(function(item) {
        if(item.necessity === true && item.quantity < item.preferred){
          vm.transferred.push(item);
          vm.necessity.push(item);
          vm.transferredAmt= vm.transferred.length;
        } else if (item.necessity === true) {
          
          vm.necessity.push(item);
          vm.necessityAmt = vm.necessity.length;
        } else if (item.category === "Produce") {
          vm.produce.push(item);
          vm.nonNecessity.push(item);
          vm.produceAmt = vm.produce.length;
        } else if(item.category === "Deli") {
          vm.deli.push(item);
          vm.nonNecessity.push(item);
          vm.deliAmt = vm.deli.length;
        } else if(item.category === "Meats") {
          vm.meats.push(item);
          vm.nonNecessity.push(item);
          vm.meatsAmt = vm.meats.length;
        } else if(item.category === "Spices") {
          vm.spices.push(item);
          vm.nonNecessity.push(item);
          vm.spicesAmt = vm.spices.length;
        } else if(item.category === "Baking") {
          vm.baking.push(item);
          vm.nonNecessity.push(item);
          vm.bakingAmt = vm.baking.length;
        } else if(item.category === "Breakfast") {
          vm.breakfast.push(item);
          vm.nonNecessity.push(item);
          vm.breakfastAmt = vm.breakfast.length;
        } else if(item.category === "Snacks") {
          vm.snacks.push(item);
          vm.nonNecessity.push(item);
          vm.snacksAmt = vm.snacks.length;
        } else if(item.category === "Sweets") {
          vm.sweets.push(item);
          vm.nonNecessity.push(item);
          vm.sweetsAmt = vm.sweets.length;
        } else if(item.category === "Grains") {
          vm.grains.push(item);
          vm.nonNecessity.push(item);
          vm.grainsAmt = vm.grains.length;
        } else if(item.category === "Frozen") {
          vm.frozen.push(item);
          vm.nonNecessity.push(item);
          vm.frozenAmt = vm.frozen.length;
        } else if(item.category === "Beverages") {
          vm.bevs.push(item);
          vm.nonNecessity.push(item);
          vm.bevsAmt = vm.bevs.length;
        } else if(item.category === "Hygiene") {
          vm.hygiene.push(item);
          vm.nonNecessity.push(item);
          vm.hygieneAmt = vm.hygiene.length;
        } else if(item.category === "Household") {
          vm.household.push(item);
          vm.nonNecessity.push(item);
          vm.householdAmt = vm.household.length;
        } else if(item.category === "Dairy") {
          vm.dairy.push(item);
          vm.nonNecessity.push(item);
          vm.dairyAmt = vm.dairy.length;
        } else {
          vm.other.push(item);
          vm.nonNecessity.push(item);
          vm.otherAmt = vm.other.length;
        }
      });
      
    });
  }

  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $cookies.remove('house_id');
    $state.go('landing');
  };
     
};

UserHomeController.$inject = ['$cookies', 'ListService', 'PantryService', '$scope', 'TransferService'];

export default UserHomeController;