var express = require("express");
const createCookieToken = require("../../api/authentication/createCookieToken");
const logOut = require("../../api/authentication/logout");
var router = express.Router();

router.post("/jwt", createCookieToken);

router.post("/logout", logOut);

module.exports = router;
