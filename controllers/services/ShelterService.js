
angular
.module('afs')
.service('ShelterService', [function ShelterService () {
  const _Shelter = Parse.Object.extend('Shelter');
  const query = new Parse.Query(_Shelter);

  function findShelters () { return query.find();  }
  function getShelter (id) { return query.get(id); }

  return {
    findShelters: findShelters,
    getShelter:   getShelter
  };
}]);
