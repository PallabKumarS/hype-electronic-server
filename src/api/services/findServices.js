const Service = require("../../models/Services");

const findServices = async (req, res) => {
  const services = await Service.find();
  res.send(services);
};

module.exports = findServices;
