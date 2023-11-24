const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    serviceImage: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    serviceInfo: {
      type: String,
      required: true,
    },
    providerImage: {
      type: String,
      required: true,
    },
    providerName: {
      type: String,
      required: true,
    },
    providerInfo: {
      type: String,
      required: true,
    },
    providerEmail: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    serviceArea1: {
      type: Schema.Types.Decimal128,
    },
    serviceArea2: {
      type: Schema.Types.Decimal128,
    },
    locationText: {
      type: String,
    },
  },
  {
    collection: "serviceCollection",
  }
);

const Service = model("serviceCollection", serviceSchema);

module.exports = Service;
