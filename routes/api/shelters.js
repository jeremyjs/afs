var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Shelter = require('../../models/shelter');
var allowedFields = ['name'];

router.route('/')
  .get(function (req, res, next) {
    Shelter.find({ deleted: false }, function(err, shelters) {
      if(err) res.send(err);
      else    res.send(shelters);
    });
  })
  .post(function (req, res, next) {
    var body = _.pick(req.body, allowedFields);
    Shelter.create(body, function(err, shelter) {
      if(err) res.send(err);
      else    res.json(shelter);
    });
  })

router.route('/:id')
  .get(function (req, res, next) {
    Shelter.findById(req.params.id, function (err, shelter) {
      if(err) res.send(err);
      else    res.json(shelter);
    });
  })
  .put(function (req, res, next) {
    var body = _.pick(req.body, allowedFields);
    Shelter.findByIdAndUpdate(req.params.id, body, function (err, shelter) {
      if(err) res.send(err);
      else Shelter.findById(shelter._id, function (err, shelter) {
        if(err) res.send(err);
        else    res.json(shelter);
      });
    });
  })
  .delete(function (req, res, next) {
    Shelter.findById(req.params.id, function (err, shelter) {
      if(err) res.send(err);
      else shelter.softdelete(function (err, shelter) {
        if(err) res.send(err);
        else    res.sendStatus(200);
      });
    })
  })

router.post('/:id/restore', function (req, res, next) {
  Shelter.findById(req.params.id, function (err, shelter) {
    if(err) res.send(err);
    else shelter.restore(function (err, shelter) {
      if(err) res.send(err);
      else    res.send(shelter);
    });
  })
})

module.exports = router;
