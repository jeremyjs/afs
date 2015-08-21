angular.module('afsLS', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		.state('afs', {
			url: '/afs',
			templateUrl: 'afs.html'
		})

		//a fresh start log in
		.state('afs.signin', {
			url: '/signin',
			templateUrl: 'afs-signin.html',
			controller: 'loginController'
		})

		//a fresh start register
		.state('afs.register', {
			url: '/register',
			templateUrl: 'afs-register.html',
			controller: 'regController'
		})

		//a fresh start
		.state('afs.fp', {
			url: '/fp',
			templateUrl: 'afs-fp.html',
			controller: 'fpController'
		});

		$urlRouterProvider.otherwise('/afs/signin');
})

//loginController
.controller('loginController', function($scope) {
	$scope.login = function() {
		var _User = Parse.Object.extend("Users");

		var query = new Parse.Query(_User);
		var _user = new _User();
 
		query.equalTo("username", $scope.username);
		query.equalTo("password", $scope.password);

		//find using query.find
		query.find({
			success: function(results) {
				if(results.length === 1) {
					//go to shelter page
					alert("Going to profile page");
					}
				else
					alert("Incorrect user combination");
				},
				error: function(results, error) {
					alert("Error: " + error.code + error.message);
				}
			});
		}
})

//registration controller
.controller("regController", function($scope) 
{
	$scope.register= function() {
		var _User = Parse.Object.extend("Users");
		var query = new Parse.Query(_User);

		var _user = new _User();


		// put info into a database, but however before we input data
		// we need to look for info from parse.
		query.equalTo("username", $scope.username);
		query.equalTo("email", $scope.email);
		query.find({
			success: function(results) 
			{
				if(results.length === 0  && $scope.checkPWComb()) 
				{
					_user.set("username", $scope.username);
					_user.set("password", $scope.password);
					_user.set("name", $scope.name);
					_user.set("email", $scope.email);
					_user.set("isVerified", false);

					//campaignids
					_user.set("campaignIds", "");
					//communityIds
					_user.set("communityIds", "")
					//followedShelterIds
					_user.set("shelterIds", "");

					_user.save(null, {
					success: function(user) {
						alert("User created");
					},
					error: function(user, error) {
						alert("User was not created");
						}
					});
				}
				else
				{
					//user already exists
					if(!$scope.checkPWComb())
						alert("Passwords do not match");
					else
						alert("User already exists!");
				}
			},
			error: function(error) {}
		});
	}
	$scope.checkPWComb = function() {
		if($scope.password === $scope.passwordOne) {
			return true;
		}
		else
			return false;
	}
})

//forgotPassword controller

//check to see if email exists
//if it does send email with password reset?
.controller('fpController', function($scope) {
	//check email if it exists
	//send email code
	$scope.sendEmail = function() {
		var _UserEmail = Parse.Object.extend("Users");
		var query = new Parse.Query(_UserEmail);

		var _userEmail = new _UserEmail();

		query.equalTo("email", $scope.emailOne);

		query.find({
			success: function(results) {
				//send email here
				//need to make a call to the server from here
			},
			error: function(results, error) {
				alert("Error: " + error.code);
			}
		})
	}
});