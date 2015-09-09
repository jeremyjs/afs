angular
.module('afs')
.config(['$stateProvider', '$urlRouterProvider', function StateConfig($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /campaigns
  $urlRouterProvider.otherwise('/campaigns');
  //
  // Now set up the states
  $stateProvider
    // Campaigns
    .state('campaigns', {
      url: '/campaigns',
      templateUrl: 'partials/campaigns.html',
      controller: 'CampaignCtrl',
      controllerAs: 'vm'
    })
    // Shelters
    .state('shelters', {
      url: '/shelters',
      templateUrl: 'partials/shelter/list.html',
      controller: 'ShelterCtrl',
      controllerAs: 'vm'
    })
    .state('shelter', {
      url: '/shelters/:id',
      templateUrl: 'partials/shelter/profile.html',
      controller: 'ShelterCtrl',
      controllerAs: 'vm'
    });
}]);
