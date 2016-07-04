//var xml2js = require("xml2js");

angular.module('IPGui.controllers', []).

  /* Xmlload controller */
  controller('xmlloader', ['$scope', 'metadata', function($scope, metadata) {  
  	$scope.selectfile = metadata.fileName();
  	//console.log($scope.selectfile.name);
  }]).

  /* interface display controller */
  controller('ipgui', ['$scope', 'metadata', function($scope, metadata) {

	  $scope.views = {};
	  $scope.active= {};
	  $scope.userConfig = {}

  	var init = function(result)
  	{
		$scope.views = result;
		$scope.active = $scope.views[0];

	/*init userConfig*/
	for( var i=0; i<$scope.views.length; i++){
		var view = $scope.views[i];
		for( var j=0; j<view.group.length; j++){
			var group = view.group[j];
			for( var k=0; k<group.setting.length; k++){
				var setting =group.setting[k];
				if( "default" in setting.$ )
					$scope.userConfig[setting.$["id"]] =  setting.$["default"];
  				else{
					if(setting.$["display"] == "checkbox"){
						$scope.userConfig[setting.$["id"]] =  false;
	
					}
					else if(setting.$["display"] == "dropbox" || setting.$["display"] == "radius"){
						$scope.userConfig[setting.$["id"]] =  $scope.parseList(setting.$["values"])[0];
					}
				}
			}
		}
	}

	console.log($scope.userConfig);

  	};	  
  	var debug = function(result){console.log(result);};

	//$scope.views = metadata.load().ip.view;
	metadata.load().then(debug, function(result){console.log(result);});


	$scope.click = function (v){
		$scope.active = v;
	}
	$scope.parseList = function(str){
		return str.split(" ");
	}
	
	$scope.refreshpage = function (id){
		//$scope.$apply();
		//$scope.userConfig[id] = true;
		console.log($scope.userConfig);
		
	}

  }]);
