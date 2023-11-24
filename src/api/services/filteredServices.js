const Service = require("../../models/Services");

const filteredServices = async (req, res, next) => {
  try {
    const email = req.params.id;
    const query = { providerEmail: email };
    const result = await Service.find(query);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = filteredServices;
