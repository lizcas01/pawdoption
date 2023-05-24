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
  phone_number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dogId: {
    type: Schema.Types.ObjectId,
    ref: 'Dog',
    required: true,
  },
});

const AdoptionForm = model("AdoptionForm", adoptionFormSchema);
module.exports = AdoptionForm;
