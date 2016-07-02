

angular
.module('IPGui.services', [])
.factory('metadata', ['$q', function($q) {
	var metadata = {}
	function setFile(file) {
		metadata.file = file;
		console.log(metadata.file.name);
	}
	function fileName() {
		if('file' in metadata){
			return metadata.file.name;
		}else{
			return "";
		}
	}

	function load(){
				var d = $q.defer();
		// load xml file and convert to JSON format
		var reader = new FileReader();
		reader.onload = function(e){
		d.resolve(e.target.result);
		}
		reader.onerror = function(e){
		d.reject(e.target.result);
		}
		console.log(metadata.file);
		reader.readAsText(metadata.file);
		return d.promise;
  };


	return {
		setFile: setFile,
		fileName: fileName,
		load:   load
	}

}]);


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
