angular
.module('afs')
.controller('ShelterCtrl', ['ShelterService', ShelterCtrl]);

function ShelterCtrl(ShelterService) {
  // Set up vm to be the controller object. This lets us avoid scope when used with 'Controller As' syntax
  let vm = this;
  vm.test = "test";
  vm.shelters = ShelterService.findShelters().then((data) => {
    vm.shelters = data.map((s) => { return new Shelter(s); });
  });
  ShelterService.getShelter().then((data) => {
    vm.shelter = new Shelter(data);
  });
}
