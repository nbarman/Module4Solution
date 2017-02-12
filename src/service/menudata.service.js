(function () {
'use strict';
//Data Service
angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

// The service to call the resturant app
MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service  =   this;

//Returns all the categories
  service.getAllCategories = function(){
     return $http({
          method : "GET",
          url: (ApiBasePath + "/categories.json")
        }).then(function(response){

          console.log("Response",response.data);
            return response.data;

        });
  }

  //Returns the particular category

  service.getItemsForCategory = function(categoryShortName){
    
    return $http({
          method : "GET",
          url: (ApiBasePath + "/menu_items.json?category="+ categoryShortName )
        }).then(function(response){
              return response.data;
        });

  }}

})();
