var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  let myData = {
    title: 'Express',
    name: 'John',
    attributes: {
      height: 70,
      weight: 150
    }
  }

  res.render('index', myData);
});

router.get('/settings', function (req, res, next) {
  res.render('settings');
})

router.get('/weather', function (req, res, next) {
  let weatherData = {
    temp: 90,
    isRaining: true
  }
  res.render('weather', weatherData);
});


module.exports = router;
