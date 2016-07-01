//var xml2js = require("xml2js");

angular.module('IPGui.controllers', []).

  /* Xmlload controller */
  controller('xmlloader', ['$scope', 'metadata', function($scope, metadata) {  
  	$scope.selectfile = metadata.getFile();
  	//console.log($scope.selectfile.name);
  }]).

  /* interface display controller */
  controller('ipgui', ['$scope', 'metadata', function($scope, metadata) {
	
	$scope.views = metadata.load().ip.view;
	
	
	$scope.active = $scope.views[0];

	$scope.click = function (v){
		$scope.active = v;
	}
	
	$scope.showme = function(expression){
		return true;
	}
	
	$scope.parseList = function(str){
		return str.split(" ");
	}

  }]);
