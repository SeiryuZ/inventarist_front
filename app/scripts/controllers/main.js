'use strict';

angular.module('inventaristFrontApp')
  .controller('MainCtrl', ['$scope', 'Product', function ($scope, Product) {
    Product.get({id: 1}, function(product){
        console.log(product);
      });

    $scope.addProduct = function(newProduct) {
        Product.save({}, newProduct);
      };
  }]);
