var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var soft_delete = require('mongoose-softdelete');

var CommunitySchema = new Schema({
  name: String
});

CommunitySchema.plugin(soft_delete);

module.exports = mongoose.model('Community', CommunitySchema);
