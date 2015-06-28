var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ shelters: 'can access shelters' });
  res.json({ campaigns: 'can access campaigns' });
  res.json({ communities: 'can access communities' });
});

router.use('/shelters', require('./api/shelters'));
router.use('/campaigns', require('./api/campaigns'));
router.use('/communities', require('./api/communities'));


module.exports = router;
