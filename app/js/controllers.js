//var xml2js = require("xml2js");

angular.module('IPGui.controllers', []).

  /* Xmlload controller */
  controller('xmlloader', ['$scope', 'metadata', function($scope, metadata) {  
  	$scope.selectfile = metadata.getFile();
  	//console.log($scope.selectfile.name);
  }]).

  /* interface display controller */
  controller('ipgui', ['$scope', 'metadata', function($scope, metadata) {
  	$scope.ipdata = "";
  	
  	metadata.load().then(
  		function (a){
  			var convertor = new xml2js();
  			convertor.parseString(a,
  				function(err, result){
  					if(err){
  						console.log(err);
  					}else{
  						$scope.ipdata = JSON.stringify(result, 2, 0);
  					}
  				}
  			)},
  		function (b){
  			$scope.ipdata = b;
  			})
  }]);