const Booking = require("../../models/Bookings");

const findAddedServices = async (req, res, next) => {
  try {
    const email = req.params.id;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const query = { providerEmail: email };
    const result = await Booking.find(query);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = findAddedServices;
