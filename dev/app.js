
  var app_id = "pJnEJkICIETGpnDO0HkGamSYTTjd5b2ZYa6iePuQ";
  var js_key = "Ac5ozu7vWZG5prjLiegH5zZ9IPn20aM7kSVb8cWH";
  Parse.initialize(app_id, js_key);
const afs = angular.module('afs', ['ui.router'])
.run(['$rootScope', function($rootScope) {
  $rootScope.sessionUser = Parse.User.current();
}]);
