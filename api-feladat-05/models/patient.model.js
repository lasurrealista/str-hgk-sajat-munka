const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    vaccine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vaccine',
    },
    count: Number,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Patient', PatientSchema);