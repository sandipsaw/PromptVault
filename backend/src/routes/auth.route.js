const express = require('express');
const {registerController} = require('../controller/auth.controller');
const {loginController} = require('../controller/auth.controller')
const router = express.Router();

router.post('/register',registerController);
router.post('/login',loginController);

module.exports = router