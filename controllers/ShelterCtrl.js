
const Shelter = Shelter;

angular
.module('afs')
.controller('ShelterCtrl', ['ShelterService', '$stateParams', ShelterCtrl]);

function ShelterCtrl(ShelterService, $stateParams) {
  // Set up vm to be the controller object. This lets us avoid scope when used with 'Controller As' syntax
  const vm = this;
  vm.test = "test";
  ShelterService.findShelters().then((data) => {
    vm.shelters = data.map((s) => { return new Shelter(s); });
  });
  ShelterService.getShelter($stateParams.id).then((data) => {
    vm.shelter = new Shelter(data);
  });
}
