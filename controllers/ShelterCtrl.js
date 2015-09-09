
const Shelter       = Shelter;
const Campaign      = Campaign;
const Announcements = Announcements;

angular
.module('afs')
.controller('ShelterCtrl', ['ShelterService', 'CampaignService', 'AnnouncementsService', '$stateParams', ShelterCtrl]);

function ShelterCtrl(ShelterService, CampaignService, AnnouncementsService, $stateParams) {
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
  }).then(() => {
    CampaignService.getCampaign(vm.shelter.currentCampaignId).then((data) => {
      vm.campaign = new Campaign(data);
      console.log('vm.campaign: ', vm.campaign);
    });
  }).then(() => {
    AnnouncementsService.getAnnouncements(vm.shelter.announcementsId).then((data) => {
      vm.announcements = new Announcements(data);
      console.log('vm.announcements: ', vm.announcements);
    });
  });
}
