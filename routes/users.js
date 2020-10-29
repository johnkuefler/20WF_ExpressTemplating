var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/', authMiddleware.ensureAuthenticated, usersController.get_users);

router.get('/create', authMiddleware.ensureAuthenticated, usersController.get_create_user);

router.post('/create', authMiddleware.ensureAuthenticated, usersController.post_create_user);

router.get('/update', authMiddleware.ensureAuthenticated, usersController.get_update);

router.post('/update', authMiddleware.ensureAuthenticated, usersController.post_update);

router.get('/delete', authMiddleware.ensureAuthenticated, usersController.get_delete);


module.exports = router;