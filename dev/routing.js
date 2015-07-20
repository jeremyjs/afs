angular
.module('afs')
.config(['$stateProvider', '$urlRouterProvider', function StateConfig($stateProvider, $urlRouterProvider) {
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
    })
    .state('shelters', {
      url: '/shelters',
      resolve: {
        shelters: ['$stateParams', 'shelterService', (params, service) => {
          return service.findShelters();
        }]
      },
      templateUrl: '../partials/shelter/list.html',
      controller: 'sheltersController',
      controllerAs: 'shelters'
    })
    .state('shelter', {
      url: '/shelters/:id',
      resolve: {
        shelter: ['$stateParams', 'shelterService', (params, service) => {
          return service.getShelter(params.id);
        }]
      },
      templateUrl: '../partials/shelter/profile.html',
      controller: 'sheltersController',
      controllerAs: 'shelters'
    })
}]);
