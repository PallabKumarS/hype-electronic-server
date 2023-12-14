const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();

// routes
const authenticationRoutes = require("./routes/authentication/index");
const servicesRoutes = require("./routes/services/index");
const bookingsRoutes = require("./routes/bookings/index");
const addedServicesRoutes = require("./routes/addedServices/index");
const paymentsRoutes = require("./routes/payment/index");

applyMiddleware(app);

app.use(authenticationRoutes);
app.use(servicesRoutes);
app.use(bookingsRoutes);
app.use(addedServicesRoutes);
app.use(paymentsRoutes);

app.get("/health", (req, res) => {
  res.send("Service Server Is Running");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested URL [${req.url}] Is Invalid`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
