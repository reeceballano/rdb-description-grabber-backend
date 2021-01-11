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

// GET ALL USER POSTS
route.get('/posts/:user_id/author', auth, postController.post_user_posts);

// GET SINGLE POST
route.get('/posts/:_id', auth, postController.post_detail);

// CREATE POST
route.post('/posts', auth, requestLimiter, postController.post_create);

// DELETE SINGLE POST
route.delete('/posts', auth, postController.post_remove);

// UPDATE SINGLE POST
route.post('/posts/:_id', auth, postController.post_update);

module.exports = route;