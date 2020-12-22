const express            = require('express');
const route              = express.Router();
const uploadController     = require('../controllers/uploadController');
const rateLimit          = require('express-rate-limit');
const auth               = require('../middleware/auth');

const requestLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50
});

route.post('/uploads', auth, requestLimiter, uploadController.upload_create);

module.exports = route;