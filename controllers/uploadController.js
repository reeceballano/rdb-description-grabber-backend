const mongoose          = require('mongoose');
const Upload            = require('../models/upload');
const bcrypt            = require('bcryptjs');

exports.upload_create = async(req, res) => {
    try {
        const upload = new Upload({

        })

    } catch(error) {
        res.send(error);
    }
}