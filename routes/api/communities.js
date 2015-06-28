var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Community = require('../../models/community');
var allowedFields = ['name'];

router.route('/')
  .get(function (req, res, next) {
    Community.find({ deleted: false }, function(err, communities) {
      if(err) res.send(err);
      else    res.send(communities);
    });
  })
  .post(function (req, res, next) {
    var body = _.pick(req.body, allowedFields);
    Community.create(body, function(err, community) {
      if(err) res.send(err);
      else    res.json(community);
    });
  })

router.route('/:id')
  .get(function (req, res, next) {
    Community.findById(req.params.id, function (err, community) {
      if(err) res.send(err);
      else    res.json(community);
    });
  })
  .put(function (req, res, next) {
    var body = _.pick(req.body, allowedFields);
    Community.findByIdAndUpdate(req.params.id, body, function (err, community) {
      if(err) res.send(err);
      else Community.findById(community._id, function (err, community) {
        if(err) res.send(err);
        else    res.json(community);
      });
    });
  })
  .delete(function (req, res, next) {
    Community.findById(req.params.id, function (err, community) {
      if(err) res.send(err);
      else community.softdelete(function (err, community) {
        if(err) res.send(err);
        else    res.sendStatus(200);
      });
    })
  })

router.post('/:id/restore', function (req, res, next) {
  Community.findById(req.params.id, function (err, community) {
    if(err) res.send(err);
    else community.restore(function (err, community) {
      if(err) res.send(err);
      else    res.send(community);
    });
  })
})

module.exports = router;
