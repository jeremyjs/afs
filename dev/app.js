angular
.module('afs', ['ui.router'])
.run(['$rootScope', function InitParse($rootScope) {
  const appId = "pJnEJkICIETGpnDO0HkGamSYTTjd5b2ZYa6iePuQ";
  const jsKey = "Ac5ozu7vWZG5prjLiegH5zZ9IPn20aM7kSVb8cWH";
  Parse.initialize(appId, jsKey);
  $rootScope.sessionUser = Parse.User.current();
}]);
