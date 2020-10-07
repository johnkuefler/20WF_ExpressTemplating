var express = require('express');
var router = express.Router();
var axios = require('axios');
var todosController = require('../controllers/todosController');

router.get('/', todosController.get_todos);

router.get('/create', todosController.get_create_todo);

router.post('/create', todosController.post_create_todo);

module.exports = router;