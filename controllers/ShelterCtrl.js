angular
.module('afs')
.controller('ShelterCtrl', ['ShelterService', ShelterCtrl]);

function ShelterCtrl(ShelterService) {
  // Set up vm to be the controller object. This lets us avoid scope when used with 'Controller As' syntax
  let vm = this;
  ShelterService.findShelters().then((data) =>
    console.log(data)
  );
  ShelterService.getShelter().then((data) =>
    console.log(data)
  );
}
