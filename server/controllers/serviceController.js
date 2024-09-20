const Service = require('../models/Service');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createService = async (req, res) => {
    const { name, price, duration, beauticianEmail } = req.body;
    try {
        let beautician = await User.findOne({ email: beauticianEmail });
        if(!beautician) {
            return res.status(400).json({ msg: 'Beautician not found' });
        }

        let service = new Service({
            name,
            price,
            duration,
            beautician: beautician.id,
        });

        await service.save();

        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const me = async (req, res) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, 'jwtSecret');
        const beauticianId = decoded.user.id;

        const beautician = await User.findById(beauticianId);
        if (!beautician) {
            return res.status(404).json({ msg: 'Beautician not found' });
        }

        const services = await Service.find({ beautician: beauticianId });

        res.json(services);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = { createService, me };