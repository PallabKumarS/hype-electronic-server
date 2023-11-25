const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
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
    userEmail: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    serviceArea1: {
      type: Schema.Types.Number,
    },
    serviceArea2: {
      type: Schema.Types.Number,
    },
    locationText: {
      type: String,
    },
    instruction: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    collection: "bookingCollection",
  }
);

const Booking = model("bookingCollection", bookingSchema);

module.exports = Booking;
