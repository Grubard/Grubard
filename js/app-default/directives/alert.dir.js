let alert = function() {
  
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {

      function functionShow () {
        let $alert = $('#alert');
        let $user = $('#user');
        let $alertBtn = $('#alert-btn');
        let $userBtn = $('#user-btn');

        if ($alert.css('display') === 'none' && $user.css('display') === 'none') {
          $alert.removeClass('hide-user');  
        } else if ($user.is(':visible') && $alert.css('display') === 'none') {
          $user.addClass('hide-user');
          $alert.removeClass('hide-user'); 
        } else {
          $alert.toggleClass('hide-user');  
        }
      }        

      element.on('click', functionShow);
    }
  };

};

alert.$inject = [];

export default alert;