const express = require("express");
const router = express.Router();
const {
  signIn,
  signUp,
  logout,
} = require("../controllers/user.controllers.js");

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post("/logout", logout);

module.exports = router;
