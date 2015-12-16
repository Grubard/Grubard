import $ from 'jQuery';

let ListController = function($scope, $http, ListService, $state, SERVER, $cookies, $rootScope) {
  
  // Setting Headers properties needed
  let url = SERVER.URL;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;
  

  // Setting functions as vm
  let vm = this;
  vm.cancelChange = cancelChange;
  vm.addItemsToPantry = addItemsToPantry;
  vm.clearThese = clearThese;
  vm.editItem = editItem;
  vm.saveNewChanges = saveNewChanges;
  vm.removeItem = removeItem;
  vm.addNewItem = addNewItem;
  vm.groceryList = groceryList;
  vm.checkAll = checkAll;

  // Empty Arrays that items will be pushed to
  let items= [];
  vm.purchased = [];


  // This was a fix to the modal not closing after a hard refresh of the grocery list page
  $('body').on('click', function() {
    $('.reveal-overlay').remove();
  });



  // Post request to add a new food item to the grocery list
  // Broadcast handles the refresh
  // Resets field to empty
  function addNewItem (food) {
    ListService.addItem(food).then((response) => {
      console.log(response);
      $scope.$broadcast('newfood');
    });
    $scope.food = {};
  }
    
  // Functions to allow users to sort their grocery lists by category or title
  vm.changeOrderCategory = function(){
    vm.orderList = 'category';
  };    
  vm.changeOrderItem = function(){
    vm.orderList = 'title';
  };


  // Calling the groceryList get request on page load
  // Function that gets the data and populates the users grocery list
  // $scope.on receives the broadcast and updates the list without page refresh
  groceryList();
  function groceryList() {
    ListService.getGroceryList().then( (response) => {
      console.log('heres your list idiot: ', response);
      vm.groceryListYay = response.data;
      
    });
    $scope.$on('newfood', function(){
      ListService.getGroceryList().then( (response) => {
        vm.groceryListYay = response.data;
      });
    });
  }

  // Delete item from grocery list function
  // Broadcast auto reloads
  function removeItem (object) {
    console.log(object.id);
    ListService.removeFood(object.id).then(()=>{
      $scope.$broadcast('newfood');
    });
  }

  
  // Function to show the editable fields on the grocery list
  function editItem (object){
    object.showEdit = true;
  }

  // Function to save the new Edits
  function saveNewChanges(object) {  
    ListService.editFoodItem(object).then((response) => {
      console.log(response);
      $scope.$broadcast('newFood');
    });
    object.showEdit = false;

  }

  function cancelChange () {
    $state.reload();
  }



  function addItemsToPantry() {
    vm.purchased.map(function(x){
      console.log(SERVER);
      console.log(SERVER.CONFIG);
      x.quantity = x.absolute; 
      if(x.preferred === null) {
        x.preferred = x.absolute;
      }
      console.log('hey you: ', x);
      $http.post(url + '/edible', x, SERVER.CONFIG).then((res)=>{
        console.log('the response:', res);
        ListService.removeFood(x.id).then(()=>{
          $scope.$broadcast('newfood');
        });
        
      });
    });  
  }
  
  function clearThese() {
    vm.purchased.map(function(x){
      ListService.removeFood(x.id).then(()=>{
        $scope.$broadcast('newfood');
      });
      
    });
  }
  function checkAll(){
    
    vm.purchased = vm.groceryListYay.map(function(x){
      console.log(x);
      
    });
  }
  vm.logOut = function(){
    $cookies.remove('auth_token');
    $cookies.remove('username');
    $cookies.remove('house_id');
    $state.go('landing');
  };

};

ListController.$inject = ['$scope', '$http', 'ListService', '$state', 'SERVER', '$cookies', '$rootScope'];

export default ListController;