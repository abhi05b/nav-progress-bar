'use strict';

/**
 * @ngdoc function
 * @name customValidationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customValidationApp
 */
angular.module('customValidationApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.navigationSections =
[{label : 'dsad',
  barWidth : 100
},
{label : 'asdd',
  barWidth : 70
},
{label : 'uuuu',
  barWidth : 70
}];

$scope.processedStep ={number : 1};

$scope.determineViewStyle = function(index) {
        var viewClasses = [];
        //circle icon
        if (index + 1 < $scope.navigationSections.length) {
          viewClasses.push('circle');
          if (index == $scope.processedStep.number) {
            viewClasses.push('active');
          } else if (index < $scope.processedStep.number) {
            viewClasses.push('done');
          }
        } else {
          //cart icon case
          viewClasses.push('icon icon-cartLg');
          if (index <= $scope.processedStep.number) {
            viewClasses.push('active');
          }
        }
        return viewClasses;
      }
  });
