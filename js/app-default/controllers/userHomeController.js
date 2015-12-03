import $ from 'jquery';
let UserHomeController = function($cookies, ListService) {
  let vm = this;
  let token=$cookies.get('auth_token');
  let user =$cookies.get('username');
  $('.grocTitle').click(function(){
    $('.groceryList').addClass('shown')
    $('.pantryList').removeClass('shown')
  })
  $('.panTitle').click(function(){
    $('.groceryList').removeClass('shown')
    $('.pantryList').addClass('shown')
  })

  groceryList();
  function groceryList() {
    ListService.getGroceryList().then( (response) => {
      console.log(response);
      vm.items = response.data;
    });
  }

};

UserHomeController.$inject = ['$cookies', 'ListService'];

export default UserHomeController;