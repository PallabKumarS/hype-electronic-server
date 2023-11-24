const Service = require("../../models/Services");

const allServices = async (req, res) => {
  const emailKey = req.query.emailKey;

  if (emailKey) {
    const services = await Service.find({
      providerEmail: { $regex: emailKey, $options: "i" },
    });
    res.send(services);
  } else {
    const services = await Service.find();
    res.send(services);
  }
};

module.exports = allServices;
