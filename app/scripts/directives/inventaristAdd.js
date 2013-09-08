'use strict';

angular.module('inventaristFrontApp')
  .directive('inventaristAdd', function () {
    return {
      templateUrl: 'views/templates/inventaristAdd.html',
      scope: {},
      restrict: 'E',
      replace: true,
      link: function postLink(scope) {
        
        scope.show = false;

        scope.toggle = function() {
            scope.show = !scope.show;
            console.log ('click' + scope.show);
          };

        scope.addProduct = function() {
            console.log(scope);
        };
      }
    };
  });
