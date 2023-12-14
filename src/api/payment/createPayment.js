require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const createPayment = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const price = await req.body;
    const amount = parseInt(price.price * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createPayment;
