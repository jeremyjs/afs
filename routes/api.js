var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ shelters: 'can access shelters' });
});

router.use('/shelters', require('./api/shelters'));

module.exports = router;
