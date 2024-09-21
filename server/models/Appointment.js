const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',
        required: true,
    },
    beautician: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema);