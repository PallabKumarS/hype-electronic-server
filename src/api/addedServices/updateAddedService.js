const Booking = require("../../models/Bookings");

const updateAddedService = async (req, res, next) => {
  try {
    const id = req.params.id;
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const query = { _id: id };
    const options = { upsert: true, new: true };
    const changedState = req.body;
    const booking = {
      $set: {
        status: changedState.status,
      },
    };
    const result = await Booking.findOneAndUpdate(query, booking, options);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateAddedService;
