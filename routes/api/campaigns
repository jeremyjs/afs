var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Campaign = require('../../models/campaign');
var allowedFields = ['name'];

router.route('/')
  .get(function (req, res, next) {
    Campaign.find({ deleted: false }, function(err, campaigns) {
      if(err) res.send(err);
      else    res.send(campaigns);
    });
  })
  .post(function (req, res, next) {
    var body = _.pick(req.body, allowedFields);
    Campaign.create(body, function(err, campaign) {
      if(err) res.send(err);
      else    res.json(campaign);
    });
  })

router.route('/:id')
  .get(function (req, res, next) {
    Campaign.findById(req.params.id, function (err, campaign) {
      if(err) res.send(err);
      else    res.json(campaign);
    });
  })
  .put(function (req, res, next) {
    var body = _.pick(req.body, allowedFields);
    Campaign.findByIdAndUpdate(req.params.id, body, function (err, campaign) {
      if(err) res.send(err);
      else Campaign.findById(campaign._id, function (err, campaign) {
        if(err) res.send(err);
        else    res.json(campaign);
      });
    });
  })
  .delete(function (req, res, next) {
    Campaign.findById(req.params.id, function (err, campaign) {
      if(err) res.send(err);
      else campaign.softdelete(function (err, campaign) {
        if(err) res.send(err);
        else    res.sendStatus(200);
      });
    })
  })

router.post('/:id/restore', function (req, res, next) {
  Campaign.findById(req.params.id, function (err, campaign) {
    if(err) res.send(err);
    else campaign.restore(function (err, campaign) {
      if(err) res.send(err);
      else    res.send(campaign);
    });
  })
})

module.exports = router;
