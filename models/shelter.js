var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var soft_delete = require('mongoose-softdelete');

var ShelterSchema = new Schema({
  name: String
});

ShelterSchema.plugin(soft_delete);

module.exports = mongoose.model('Shelter', ShelterSchema);
