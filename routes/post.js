const express            = require('express');
const route              = express.Router();
const postController     = require('../controllers/postController');
const rateLimit          = require('express-rate-limit');
const auth               = require('../middleware/auth');

const requestLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50
});

// GET ALL POSTS
route.get('/posts', auth, postController.post_list);

// GET SINGLE POST
route.get('/posts/:_id', postController.post_detail);

// CREATE POST
route.post('/posts', requestLimiter, postController.post_create);

// DELETE SINGLE POST
route.delete('/posts', auth, postController.post_remove);

// UPDATE SINGLE POST
route.post('/posts/:_id', auth, postController.post_update);

module.exports = route;