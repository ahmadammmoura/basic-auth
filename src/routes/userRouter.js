'use strict';

const router = require('express').Router();
const { signUp, signIn } = require('../controllers/auth.controller');
const basic = require('../middleware/basic');

router.post('/signup', signUp);
router.post('/signin', basic, signIn);

module.exports = router;
