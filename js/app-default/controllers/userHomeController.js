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
      vm.items = response.data;
    });
  }

  vm.necessity = [];
  vm.produce = [];
  vm.dairy = [];
  vm.deli = [];
  vm.meats = [];
  vm.baking = [];
  vm.spices = [];
  vm.frozen = [];
  vm.bevs = [];
  vm.hygiene = [];
  vm.household = [];
  vm.other = [];
  

  pantryList();

  function pantryList() {
    PantryService.getPantryList().then( (response) => {
      vm.pantryItems = response.data;
      let items = response.data;
      items.forEach(function(item) {
        if (item.neccessity === true) {
          vm.necessity.push(item);
        } else if (item.category === "Produce") {
          vm.produce.push(item);
          vm.produceAmt = vm.produce.length;
        } else if(item.category === "Dairy") {
          vm.dairy.push(item);
          vm.dairyAmt = vm.dairy.length;
        } else if(item.category === "Deli") {
          vm.deli.push(item);
          vm.deliAmt = vm.deli.length;
        } else if(item.category === "Meats") {
          vm.meats.push(item);
          vm.meatsAmt = vm.meats.length;
        } else if(item.category === "Baking") {
          vm.baking.push(item);
          vm.bakingAmt = vm.baking.length;
        } else if(item.category === "Spices") {
          vm.spices.push(item);
          vm.spicesAmt = vm.spices.length;
        } else if(item.category === "Frozen") {
          vm.frozen.push(item);
          vm.frozenAmt = vm.frozen.length;
        } else if(item.category === "Beverages") {
          vm.bevs.push(item);
          vm.bevsAmt = vm.bevs.length;
        } else if(item.category === "Hygiene") {
          vm.hygiene.push(item);
          vm.hygieneAmt = vm.hygiene.length;
        } else if(item.category === "Household") {
          vm.household.push(item);
          vm.householeAmt = vm.household.length;
        } else {
          vm.other.push(item);
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

UserHomeController.$inject = ['$cookies', 'ListService', 'PantryService', '$scope'];

export default UserHomeController;