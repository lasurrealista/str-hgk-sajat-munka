const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema( 
    {
        _id: Number,
        firstName: String,
        lastName: String,
        vaccine: String,
    }, 
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Patient', PatientSchema);