const Booking = require("../../models/Bookings");

const deleteBooking = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const id = req.params.id;
    const query = { _id: id };
    const result = await Booking.findOneAndDelete(query);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = deleteBooking;
