var express = require("express");
const verifyToken = require("../../middlewares/verifyToken");
const findBookings = require("../../api/bookings/findBookings");
const createBooking = require("../../api/bookings/createBooking");
const deleteBooking = require("../../api/bookings/deleteBooking");
var router = express.Router();

router.get("/bookings/:id", verifyToken, findBookings);

router.put("/bookings/:id", verifyToken);

router.post("/bookings", verifyToken, createBooking);

router.delete("/bookings/:id", verifyToken, deleteBooking);

module.exports = router;
