'use strict';

/**
 * @ngdoc overview
 * @name navProgressBarApp
 * @description
 * # navProgressBarApp
 *
 * Main module of the application.
 */
angular
  .module('navProgressBarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap',
	'customValidationApp'
  ])
  .directive('navProgressBar', function () {
    return {
      templateUrl: 'views/nav-progress-bar.html',
      restrict: 'E',
	  scope :{
		navigationSections :"=",
		currentSection : "=",
		currentPage : "="
	  },
      link: function postLink(scope, element, attrs) {
		
		scope.currentSection =  scope.currentSection || 1;
		scope.currentPage= scope.currentPage || 1;
	  
	  
		scope.$watchCollection('navigationSections',function(){
			scope.changeProgress();
		});
		
		scope.$watch('currentSection',function(){
			scope.changeProgress();
		});
		
		scope.$watch('currentPage',function(){
			scope.changeProgress();
		});
		
        scope.changeProgress = function(){
			for(var i=1; i <= scope.navigationSections.length;i++){
				if(scope.currentSection && i < scope.currentSection){
					scope.navigationSections[i-1].barWidth = 100;
				}else if(scope.currentSection && i > scope.currentSection){
					scope.navigationSections[i-1].barWidth = 0;
				}else if(scope.currentSection && i === scope.currentSection){
					scope.navigationSections[i-1].barWidth = (scope.currentPage/scope.navigationSections[i-1].pages)*100;
				}
			}
		};
		
		scope.determineViewStyle = function(index) {
        var viewClasses = [];
        //circle icon
		viewClasses.push('circle');
        
		if (index < scope.navigationSections.length) {
			if (scope.currentSection && index == scope.currentSection) {
           viewClasses.push('active');
        }
           if (scope.currentSection && index < scope.currentSection) {
            viewClasses.push('done');
          }
		}else{
			if (scope.currentSection && index <= scope.currentSection) {
            viewClasses.push('done');
          }
		}
        return viewClasses;
      };
      }
    };
  });
