
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
    if(vm.shelters) {
      console.log('vm.shelters: ', vm.shelters);
      console.log('vm.shelters[0].id: ', vm.shelters[0].id);
      console.log('vm.shelters[0].name: ', vm.shelters[0].name);
    }
  });
  ShelterService.getShelter($stateParams.id).then((data) => {
    vm.shelter = new Shelter(data);
    console.log('vm.shelter: ', vm.shelter);
  });
}
