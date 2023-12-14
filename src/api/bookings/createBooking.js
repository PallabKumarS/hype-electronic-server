const Booking = require("../../models/Bookings");

const createBooking = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const booking = req.body;
    console.log("hit", booking);
    const result = await Booking.create(booking);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createBooking;
