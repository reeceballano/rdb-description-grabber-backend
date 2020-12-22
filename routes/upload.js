const express            = require('express');
const route              = express.Router();
const rateLimit          = require('express-rate-limit');
const auth               = require('../middleware/auth');
const Upload             = require('../models/upload');
const multer             = require('multer');
const mongoose           = require('mongoose');

const requestLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50
});

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads/posts/');
        // cb(null, '../public/uploads/posts/');
    },

    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-') + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

route.post('/uploads', auth, requestLimiter, upload.single('postImage'), (req, res) => {
    try {
        const uploadImage = new Upload({
            _id: new mongoose.Types.ObjectId(),
            name: 'testname',
            post_id: '1',
            url: req.file.path,
            author: '1',
        })

        uploadImage.save( (err) => {
            if(err) {
                return res.status(400).json({
                    success: false,
                    content: err.errmsg
                })
            }

            res.status(200).json({
                success: true,
                content: uploadImage
            })
        })

    } catch(error) {
        console.log(error)
        // res.send(error);
    }
});

module.exports = route;