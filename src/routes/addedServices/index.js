var express = require("express");
const verifyToken = require("../../middlewares/verifyToken");
const findAddedServices = require("../../api/addedServices/findAddedServices");
const updateAddedService = require("../../api/addedServices/updateAddedService");
var router = express.Router();

router.get("/myBookings/:id", verifyToken, findAddedServices);

router.put("/myBookings/:id", verifyToken, updateAddedService);

module.exports = router;
