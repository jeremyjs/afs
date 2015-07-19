angular
.module('afs')
.config(function StateConfig($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /campaigns
  $urlRouterProvider.otherwise("/campaigns");
  //
  // Now set up the states
  $stateProvider
    .state('campaigns', {
      url: "/campaigns",
      templateUrl: "partials/campaigns.html",
      controller: "CampaignCtrl",
      controllerAs: 'vm'
    });
});
