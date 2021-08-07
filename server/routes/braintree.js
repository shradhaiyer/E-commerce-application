const express = require('express');
const router = express.Router();
const { requireSignin, isAdmin, isAuth} = require('../controllers/auth');
const { generateToken } = require('../controllers/braintree');
const { userById } = require('../controllers/user');

router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken) ;

router.param('userId', userById);
module.exports = router;