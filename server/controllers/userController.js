const User = require('../models/User');
const jwt = require('jsonwebtoken');

const me = async (req, res) => {
    const token = req.header('x-auth-token');
    if(!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, 'jwtSecret');
        const user = await User.findById(decoded.user.id);
        user.password = undefined;
        res.json(user);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = { me };