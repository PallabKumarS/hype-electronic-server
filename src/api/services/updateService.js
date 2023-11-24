const Service = require("../../models/Services");

const updateService = async (req, res) => {
  const id = req.params.id;
  const email = req.query.email;
  if (req.user.email !== email) {
    return res.status(403).send({ message: "Forbidden Access" });
  }
  const query = { _id: id };
  const options = { upsert: true, new: true };
  const updatedService = req.body;
  const service = {
    $set: {
      serviceArea1: updatedService.serviceArea1,
      serviceArea2: updatedService.serviceArea2,
      locationText: updatedService.locationText,
      serviceImage: updatedService.serviceImage,
      serviceName: updatedService.serviceName,
      serviceInfo: updatedService.serviceInfo,
      price: updatedService.price,
      providerEmail: updatedService.providerEmail,
      providerName: updatedService.providerName,
      providerImage: updatedService.providerImage,
    },
  };
  const result = await Service.findOneAndUpdate(query, service, options);
  res.status(200).send(result);
};

module.exports = updateService;
