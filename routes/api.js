var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ shelters: 'can access shelters' });
});

module.exports = router;
