'use strict';

/**
 * @ngdoc function
 * @name navProgressBarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the navProgressBarApp
 */
angular.module('navProgressBarApp')
  .controller('MainCtrl', function ($scope,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.navigationSections =
[{label : 'Home',
  pages : 2,
  id :1
},
{label : 'Add Product',
  pages : 3,
  id:2
}];

//$scope.section = null;


$scope.addSection = function(isInvalid,section){
	if(isInvalid){
		$rootScope.$broadcast('onSubmit');
	}else{
		$scope.navigationSections = $scope.navigationSections || [];
		$scope.navigationSections.push(angular.copy(section));
		$scope.section = null;
	}
};


$scope.getPageArray = function(num){
var a=[];
for(var i=0;i<num;i++){
	a[i]=i+1;
}
return a;

}



  });
