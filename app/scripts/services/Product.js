'use strict';

angular.module('inventaristFrontApp')
  .factory('Product', ['$resource', function ($resource) {
    
    var url = 'http://localhost\\:8000/api/products/:id/';
    //
    return  $resource(url, {id: '@id'}, {});

  }]);
