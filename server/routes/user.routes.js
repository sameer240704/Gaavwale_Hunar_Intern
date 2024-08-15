const express = require('express');
const router = express.Router();
const { signIn, signUp } = require("../controllers/user.controllers.js");

router.post('/signin', signIn);
router.post('/signup', signUp);

module.exports = router;
