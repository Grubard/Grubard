let pantry = function() {
  
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {

      function functionShow () {
        $('#pantry-list').toggleClass('hide-pantry');
        console.log('hi');
      }        

      element.on('click', functionShow);
    }
  };

};

pantry.$inject = [];

export default pantry;