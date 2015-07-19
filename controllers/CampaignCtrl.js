angular
.module('afs')
.controller("CampaignCtrl", ["CampaignService", CampaignCtrl]);

function CampaignCtrl(CampaignService) {
  /* Set up vm to be the controller object. This lets us avoid scope when used with 'Controller As' syntax */
  let vm = this;
  CampaignService.getCampaigns().then((data) =>
    console.log(data)
  );
}
