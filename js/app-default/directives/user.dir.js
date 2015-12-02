let user = function() {
  
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
          $user.removeClass('hide-user');  
        } else if ($alert.is(':visible') && $user.css('display') === 'none') {
          $alert.addClass('hide-user');
          $user.removeClass('hide-user'); 
        } else {
          $user.toggleClass('hide-user');  
        }
      }        

      element.on('click', functionShow);
    }
  };

};

user.$inject = [];

export default user;