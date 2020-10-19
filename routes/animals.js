var express = require('express');
var router = express.Router();
var animalsController = require('../controllers/animalsController');
const { route } = require('./todos');

router.get('/', animalsController.get_animals);

router.get('/create', animalsController.get_create_animal);

router.post('/create', animalsController.post_create_animal);

router.get('/update', animalsController.get_update);

router.post('/update', animalsController.post_update);

router.get('/delete', animalsController.get_delete);


module.exports = router;