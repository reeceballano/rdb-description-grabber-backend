const express   = require('express');
const route     = express.Router();
const mongoose  = require('mongoose');
const bcrypt    = require('bcryptjs');
const User      = require('../models/user');
const jwt       = require('jsonwebtoken');
const config 	= require('config');


// CHECK TOKEN IF VALID THEN GET USER INFO
route.get('/auth', async (req, res) => {
    const token = req.headers.token;

    jwt.verify(token, config.SECRET_KEY, async (err, decoded) => {
        // IF TOKEN IS INVALID
        if(err) {
            return res.status(401).json({
                info: 'Unauthorized'
            });
        }

        // IF TOKEN IS VALID
        const user = await User.findOne({ _id: decoded.userId });

        if(!user) {
            return res.status(400).json({
                info: 'User not found'
            });
        }

        return res.status(200).json({
            info: 'User Info',
            user: {
                id: user._id,
                email: user.email,
                name: user.name
            }
        });
    });
});

// LOGIN USER
route.post('/auth', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        // CHECK IF EMAIL EXISTS
        const user = await User.findOne({ email: email });
        if(!user) {
            return res.status(400).json({ error: 'Email not found!' })
        }

        // IF USER EXIST, CHECK USER PASS AND COMPARE IN DB
        const dbUserPass = user.password;
        const comparePass = bcrypt.compareSync(password, dbUserPass);

        // IF USER ENTER AN INVALID PASSWORD
        if(!comparePass) {
            return res.status(400).json({ error: 'Denied!'})
        }

        // IF LOGIN SUCCESS | This will store in localstorage, we only need to user._id (userId) and use that to find the user in DB
        const token = jwt.sign({ userId: user._id }, config.SECRET_KEY, { expiresIn: '1h'});

        res.status(200).json({ 
            info: 'Success!',
            token: token,
        });        

    } catch(error) {
        res.status(400).json({
            error: error.errmsg
        })
    }

});

module.exports = route;