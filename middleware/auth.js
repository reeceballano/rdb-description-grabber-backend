const jwt = require('jsonwebtoken');
const config 	= require('config');

module.exports = (req, res, next) => {
    const token = req.headers.token;

    jwt.verify(token, config.SECRET_KEY, async (err, decoded) => {
        // IF TOKEN IS INVALID
        if(err) {
            return res.status(401).json({
                info: 'Unauthorized'
            });
        } else {
            next();
        }

    });
};