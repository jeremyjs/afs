var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var soft_delete = require('mongoose-softdelete');

var CampaignSchema = new Schema({
  name: String
});

CampaignSchema.plugin(soft_delete);

module.exports = mongoose.model('Campaign', CampaignSchema);
