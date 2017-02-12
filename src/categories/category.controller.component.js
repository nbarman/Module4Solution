(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);
CategoriesController.$inject = ['items'];
function CategoriesController(items) {

//  console.log("items are " , items);
  var categoryCtrl = this;
  categoryCtrl.items = items;

}

})();
