var express = require('express');
var userController = require('../controllers/usersController');

var router = express.Router();

router.route('/').get(userController.getAllUsers).post(userController.createUser);

module.exports=router;
