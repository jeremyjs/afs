var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // TODO: put some documentation about the routes here
  res.json({
    shelters: 'can access shelters',
    campaigns: 'can access campaigns',
    communities: 'can access communities'
  });
});

router.use('/shelters', require('./api/shelters'));
router.use('/campaigns', require('./api/campaigns'));
router.use('/communities', require('./api/communities'));


module.exports = router;
