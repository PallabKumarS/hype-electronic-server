const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const { LOCAL_CLIENT, CLIENT } = require("../config/default");

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: [LOCAL_CLIENT, CLIENT],
      credentials: true,
    })
  );
  app.use(cookieParser());
};

module.exports = applyMiddleware;
