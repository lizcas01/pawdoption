const { Schema, model } = require('mongoose');

const adoptionFormSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Integar,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

}) 

const adoptionForm = model('adoptionForm', adoptionFormSchema)
module.exports = adoptionForm;