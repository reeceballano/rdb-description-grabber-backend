const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.token;

    jwt.verify(token, 'this_is_the_secret_key', async (err, decoded) => {
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