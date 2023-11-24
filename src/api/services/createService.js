const Service = require("../../models/Services");

const createService = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (req.user.email !== email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const newService = req.body;
    const result = await Service.insertOne(newService);
    res.status(200).send(result);
  } catch (err) {
    next();
  }
};

module.exports = createService;
