//var xml2js = require("xml2js");

angular.module('IPGui.controllers', []).

  /* Xmlload controller */
  controller('xmlloader', ['$scope', 'metadata', function($scope, metadata) {  
  	$scope.selectfile = metadata.getFile();
  	//console.log($scope.selectfile.name);
  }]).

  /* interface display controller */
  controller('ipgui', function($scope) {    
  });