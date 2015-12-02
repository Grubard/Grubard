let userList = function() {
  
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {

      function functionShow () {
        $('#user-list').toggleClass('hide-user');
      }        

      element.on('click', functionShow);
    }
  };

};

userList.$inject = [];

export default userList;