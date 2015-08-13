angular
.module('afs')
.controller('ShelterCtrl', ['ShelterService', ShelterCtrl]);

function ShelterCtrl(ShelterService) {
  // Set up vm to be the controller object. This lets us avoid scope when used with 'Controller As' syntax
  let vm = this;
  vm.test = "test";
  vm.shelters = ShelterService.findShelters().resolve(); //(data) =>
  //   console.log(data);
  //   vm.shelters = data;
  // );
  ShelterService.getShelter().then((data) =>
    console.log(data);
    vm.shelter = data;
  );
}
