var express = require('express');
var router = express.Router();
var signupController = require('../controllers/signupController');

router.get('/signup', signupController.signupGet);

module.exports = router;