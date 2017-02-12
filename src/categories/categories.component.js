(function () {
'use strict';


angular.module('data')
.component('categories', {
  templateUrl: 'src/templates/category.template.html',
  bindings: {
    items: '<',
  }
});

})();
