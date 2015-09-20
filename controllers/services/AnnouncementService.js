
const _ = _;

angular
.module('afs')
.service('AnnouncementService', [function AnnouncementService () {
  const _Announcement = Parse.Object.extend('Announcement');
  const query = new Parse.Query(_Announcement);

  function findAnnouncements (queryFields) {
    let announcementsQuery;
    if (! queryFields) {
      announcementsQuery = query;
    } else {
      announcementsQuery = new Parse.Query(_Announcement);
      _.forOwn(queryFields, (value, field) => {
        announcementsQuery.equalTo(field, value);
      });
    }
    return announcementsQuery.find();
  }

  function findAnnouncementsByShelter (shelterId) {
    return findAnnouncements({ shelterId: shelterId });
  }

  function findAnnouncementsByCampaign (campaignId) {
    return findAnnouncements({ campaignId: campaignId });
  }

  function getAnnouncement (id) { return query.get(id); }

  return {
    findAnnouncements: findAnnouncements,
    findAnnouncementsByShelter: findAnnouncementsByShelter,
    findAnnouncementsByCampaign: findAnnouncementsByCampaign,
    getAnnouncement:   getAnnouncement
  };
}]);
