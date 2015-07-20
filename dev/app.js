angular
.module('afs', ['ui.router'])
.run(function InitParse () {
  const appId = "pJnEJkICIETGpnDO0HkGamSYTTjd5b2ZYa6iePuQ";
  const jsKey = "Ac5ozu7vWZG5prjLiegH5zZ9IPn20aM7kSVb8cWH";
  Parse.initialize(appId, jsKey);
});

// needs to be called somewhere else, since $rootScope is not available on
// angular.module(...).run()
//
// $rootScope.sessionUser = Parse.User.current();

