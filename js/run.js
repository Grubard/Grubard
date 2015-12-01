let run = function($rootScope) {

  $rootScope.$on('$viewContentLoaded', function (event, data) {
    $(document).foundation();
  });
  
};

run.$inject = ['$rootScope'];

export default run;