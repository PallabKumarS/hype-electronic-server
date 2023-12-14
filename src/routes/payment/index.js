var express = require("express");
const verifyToken = require("../../middlewares/verifyToken");
const createPayment = require("../../api/payment/createPayment");
const sendMail = require("../../api/payment/sendMail");
var router = express.Router();

router.post("/send-mail", verifyToken, sendMail);
router.post("/payment", verifyToken, createPayment);

module.exports = router;
