const Service = require("../../models/Services");

const singleService = async (req, res) => {
  const id = req.params.id;
  const email = req.query.email;
  if (req.user.email !== email) {
    return res.status(403).send({ message: "Forbidden Access" });
  }
  const query = { _id: id };
  const service = await Service.findOne(query);
  res.send(service);
};

module.exports = singleService;
