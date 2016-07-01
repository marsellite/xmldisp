//var xml2js = require("xml2js");

angular.module('IPGui.controllers', []).

  /* Xmlload controller */
  controller('xmlloader', ['$scope', 'metadata', function($scope, metadata) {  
  	$scope.selectfile = metadata.getFile();
  	//console.log($scope.selectfile.name);
  }]).

  /* interface display controller */
  controller('ipgui', ['$scope', 'metadata', function($scope, metadata) {
	$scope.views = [
		{'name':'write_on_reged'},
		{'name':'bb_write_on_reged'},
		{'name':'bb_write_on_reged11'}
];
	$scope.active = $scope.views[0];

	$scope.click = function click(v){
	$scope.active = v;
}
  //	$scope.ipdata = "";
  //	
  //	metadata.load().then(
  //		function (a){
  //			var convertor = new xml2js();
  //			convertor.parseString(a,
  //				function(err, result){
  //					if(err){
  //						console.log(err);
  //					}else{
  //						$scope.ipdata = JSON.stringify(result, 2, 0);
  //					}
  //				}
  //			)},
  //		function (b){
  //			$scope.ipdata = b;
  //			})
  }]);
