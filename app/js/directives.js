angular
  .module('IPGui.directives', [])
  .directive('selectFile', ['metadata', function(metadata) {
    return {   
    		require: 'ngModel',     
        restrict: 'A',
        link: function($scope, el, attrs, ngModel){
            el.bind('change', function(event){
                //var files = event.target.files;
                //var file = files[0];
                           
                metadata.setFile(event.target.files[0]);
                ngModel.$setViewValue(metadata.getFile());
                $scope.$apply();
            });
        }
    };
}]);
//  .directive('activeStatus', function() {
//    return {   
//        restrict: 'A',
//	scope:{
//	view:'='
//},
//        link: function($scope, el){
//	if($scope.view.active)
//		el.addClass('active');
//        }
//    };
//});
