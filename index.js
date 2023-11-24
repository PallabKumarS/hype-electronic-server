const express = require("express");
const applyMiddleware = require("./src/middlewares/applyMiddleware");
const connectDB = require("./src/db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// routes
const authenticationRoutes = require("./src/routes/authentication/index");
const servicesRoutes = require("./src/routes/services/index");
const bookingsRoutes = require("./src/routes/bookings/index");
const addedServicesRoutes = require("./src/routes/addedServices/index");

applyMiddleware(app);

app.use(authenticationRoutes);
app.use(servicesRoutes);
app.use(bookingsRoutes);
app.use(addedServicesRoutes);

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

// database connect
const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server Running on Port : ${port}`);
  });
};

main();
