const { Schema, model } = require("mongoose");

const adoptionFormSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: INT,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const AdoptionForm = model("AdoptionForm", adoptionFormSchema);
module.exports = AdoptionForm;
