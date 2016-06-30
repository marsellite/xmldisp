

angular
  .module('IPGui.services', [])
  .factory('metadata', function() {
 var metadata = {}
 function setFile(file) {
   metadata.file = file;
   console.log(metadata.file.name);
 }
 function getFile() {
 	if('file' in metadata){
 		return metadata.file.name;
 	}else{
 		  return "File not selected";
 	}
 }

 return {
  setFile: setFile,
  getFile: getFile
 }

});
