// Simple code to display assembly step labels based on events
var labelId = "label-2";
$scope.$on('newStep', function(evt, arg) {
  $scope.setWidgetProp(labelId, "text", arg);
  var labelText = $scope.view.wdg[labelId].text;
  var instructText = labelText.substr(labelText);
  $scope.setWidgetProp(labelId, "text", instructText);
});

// add a label widget change name to label-2.
