let addUser = function() {
  
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {

      function functionShow () {
        $('#add-user').toggleClass('hide-user');
      }        

      element.on('click', functionShow);
    }
  };

};

addUser.$inject = [];

export default addUser;