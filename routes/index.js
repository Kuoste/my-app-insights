var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let appinsights = req.app.get('appinsights');
  appinsights.trackEvent({name: "serverCount", properties: {customProperty: "custom property value"}});
  res.render('index', { title: 'Express' });
});

module.exports = router;
