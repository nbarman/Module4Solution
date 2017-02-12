(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);
ItemsController.$inject = ['items'];
function ItemsController(items) {

  console.log(" menu items are " , items);
  var itemsCtrl = this;
  itemsCtrl.items = items.menu_items;
}

})();
