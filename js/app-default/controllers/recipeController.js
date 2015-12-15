let AddRecipe = function($http, SERVER, $cookies) {
  let vm = this;
  let url = SERVER.URL;
  let token = $cookies.get('auth_token');
  SERVER.CONFIG.headers['Access-Token'] = token;

  vm.searchForRecipe = function(recipe){
    console.log('recipe: ', recipe);
    console.log(SERVER.CONFIG);
    $http.post(url+'/recipe', recipe, SERVER.CONFIG).then((res)=>{
      console.log(res);
    });
  };
  

};

AddRecipe.$inject = ['$http', 'SERVER', '$cookies'];

export default AddRecipe;