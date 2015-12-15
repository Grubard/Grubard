let SingleRecipe = function($http, SERVER, $cookies, $stateParams) {
  let id = $stateParams.id;
  let vm = this;
  let url = SERVER.URL;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;

  $http.get(url+'/recipe/'+ id, SERVER.CONFIG).then((res)=>{
    console.log(res);
    
  });
    

};

SingleRecipe.$inject = ['$http', 'SERVER', '$cookies', '$stateParams'];

export default SingleRecipe;