const Appointment = require('../models/Appointment');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createAppointment = async (req, res) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, 'jwtSecret');
        const clientId = decoded.user.id;

        const client = await User.findById(clientId);
        if (!client) {
            return res.status(404).json({ msg: 'Client not found' });
        }

        const { serviceId, beauticianId, date, time } = req.body;

        let appointment = new Appointment({
            service: serviceId,
            date,
            time,
            client: clientId,
            beautician: beauticianId,
        });

        await appointment.save();
        res.json(appointment);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = { createAppointment };