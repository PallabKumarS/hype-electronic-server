const Booking = require("../../models/Bookings");

const findBookings = async (req, res, next) => {
  try {
    const email = req.params.id;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const query = { userEmail: email };
    const result = await Booking.find(query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = findBookings;
