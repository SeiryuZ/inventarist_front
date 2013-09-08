'use strict';

angular.module('inventaristFrontApp')
  .directive('inventaristAdd', function () {
    return {
      templateUrl: 'views/templates/inventaristAdd.html',
      scope: {
        submit: '&'
      },
      restrict: 'E',
      replace: true,
      link: function postLink(scope, elements, attrs) {
        
        scope.show = false;

        scope.toggle = function() {
            scope.show = !scope.show;
          };

      }
    };
  });
