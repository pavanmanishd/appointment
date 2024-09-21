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

const getAppointments = async (req, res) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, 'jwtSecret');
        const id = decoded.user.id;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // const appointments = [
        //   { id: 1, date: "2023-06-15", time: "10:00 AM", service: "Haircut", beautician: "Jane Doe" },
        //   { id: 2, date: "2023-06-20", time: "02:00 PM", service: "Manicure", beautician: "John Smith" },
        //   { id: 3, date: "2023-06-25", time: "11:00 AM", service: "Facial", beautician: "Alice Johnson" },
        // ]

        if (user.role === 'client') {
            const appointments = await Appointment.find({ client: id }).populate('service beautician');
            const formattedAppointments = appointments.map(appointment => {
                return {
                    id: appointment._id,
                    date: appointment.date,
                    time: appointment.time,
                    service: appointment.service.name,
                    beautician: appointment.beautician.name,
                }
            });
            return res.json(formattedAppointments);
        } else if (user.role === 'beautician') {
            const appointments = await Appointment.find({ beautician: id }).populate('service client');
            const formattedAppointments = appointments.map(appointment => {
                return {
                    id: appointment._id,
                    date: appointment.date,
                    time: appointment.time,
                    service: appointment.service.name,
                    client: appointment.client.name,
                }
            });
            return res.json(formattedAppointments);
        } else {
            return res.status(401).json({ msg: 'Unauthorized' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
        

module.exports = { createAppointment, getAppointments };