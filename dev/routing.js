// angular.module('afs', ['ui.router']).config( ($stateProvider, $urlRouterProvider) => {
//   $urlRouterProvider.otherwise('/shelters');

//   $stateProvider
//   .state('shelters', {
//     url: '/shelters',
//     resolve: {
//       shelters: ['$stateParams', 'shelterService', (params, service) => {
//         return service.findShelters();
//       }]
//     },
//     templateUrl: '../partials/shelter/list.html',
//     controller: 'sheltersController',
//     controllerAs: 'shelters'
//   })
//   .state('shelter', {
//     url: '/shelters/:id',
//     resolve: {
//       shelter: ['$stateParams', 'shelterService', (params, service) => {
//         return service.getShelter(params.id);
//       }]
//     },
//     templateUrl: '../partials/shelter/profile.html',
//     controller: 'sheltersController',
//     controllerAs: 'shelters'
//   })
// })
