var express = require("express");
var router = express.Router();
const findServices = require("../../api/services/findServices");
const verifyToken = require("../../middlewares/verifyToken");
const deleteService = require("../../api/services/deleteService");
const filteredServices = require("../../api/services/filteredServices");
const allServices = require("../../api/services/allServices");
const singleService = require("../../api/services/singleService");
const createService = require("../../api/services/createService");
const updateService = require("../../api/services/updateService");

router.get("/services", findServices);

router.get("/services/:id", filteredServices);

router.get("/allServices", allServices);

router.get("/allServices/:id", verifyToken, singleService);

router.post("/allServices", verifyToken, createService);

router.delete("/allServices/:id", verifyToken, deleteService);

router.put("/updateService/:id", verifyToken, updateService);

module.exports = router;
