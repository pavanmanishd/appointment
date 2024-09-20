const Service = require('../models/Service');
const User = require('../models/User');

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

module.exports = { createService };