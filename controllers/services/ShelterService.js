
let test = new Shelter();
test.title = 'my test shelter';
test.description = 'this is a shelter';
test.save();

// angular.module('afs').service('shelterService', [function () {
//   this.findShelters = (query) => {
//     var Shelter = Parse.Object.extend('Shelter');
//     var query = new Parse.Query(Shelter);
//     return new Promise( (resolve, reject) => {
//       query.find({ success: resolve, error: reject });
//     });
//   }
//   this.getShelter = (id) => {
//     var Shelter = Parse.Object.extend('Shelter');
//     var query = new Parse.Query(Shelter);
//     return new Promise( (resolve, reject) => {
//       query.get(id, { success: resolve, error: reject });
//     });
//   }
// }])
