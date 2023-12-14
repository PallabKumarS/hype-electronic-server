require("dotenv").config();
const nodemailer = require("nodemailer");

const localEmail = process.env.EMAIL;
const password = process.env.EMAIL_Pass;

const sendMail = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const { name, email, paymentIntentId } = await req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: localEmail,
        pass: password,
      },
      debug: true,
    });

    const mailOptions = {
      from: localEmail,
      to: email,
      subject: `New Message From Tour Quest about Your Payment`,
      text: `Hello Mr./Ms./Mss. ${name},your payment id : ${paymentIntentId}.Please contact us for any queries.Keep this id safe.Thank you.`,
    };

    await transporter.sendMail(mailOptions);
    // return NextResponse.json({ success: true });
    res.status(201).send({ success: true });
  } catch (error) {
    next(error);
    // return NextResponse.json({
    //   success: false,
    //   error: "Email could not be sent",
    // });
  }
};

module.exports = sendMail;
