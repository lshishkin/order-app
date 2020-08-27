const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  date: {
    type: String
  },
  companyName: {
    type: String,
    required: true
  },
  fullName: {
    type: String
  },
  phone: {
    type: String
  },
  comment: {
    type: String
  },
  ati: {
    type: String
  }
});

// export model user with OrderSchema
module.exports = mongoose.model("order", OrderSchema);
