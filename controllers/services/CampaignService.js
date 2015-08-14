angular
.module('afs')
.service("CampaignService", [function CampaignService() {
  var _Campaign = Parse.Object.extend("Campaign");
  function getCampaigns() {
    const query = new Parse.Query(_Campaign);
    return query.find();
  }
  return {
    getCampaigns: getCampaigns
  };
}]);
