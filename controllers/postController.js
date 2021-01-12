const mongoose          = require('mongoose');
const Post              = require('../models/post');
const bcrypt            = require('bcryptjs');
const { postSchema, findPostSchema }    = require('../helpers/post_validation_schema');
const jwt               = require('jsonwebtoken');
const config 	        = require('config');

exports.post_list = async (req, res) => {
    
    try {
        const posts = await Post.find().exec();

        res.status(200).json({
            success: true,
            content: posts
        });

    } catch(error) {
        res.status(400).json({
            success: false,
            content: error
        })
    }
}

exports.post_user_posts = async (req, res) => {
    const id = req.params.user_id;

    const token = req.headers.token;

    jwt.verify(token, config.SECRET_KEY, async (err, decoded) => {
        const userId = decoded.userId;

        if(userId === id) {
            try {
                const posts = await Post.find({ author: id }).exec();
              
                if(posts.length >= 1) {
                    return res.status(200).json({
                        success: true,
                        content: posts
                    })
                }
                
                return res.status(400).json({
                    content: 'User has no post'
                })
            } catch(error) {
                res.status(401).send(error);
            }
        } else {
            res.status(401).send('Not authorized!');
        }
    });

}

exports.post_detail = async (req, res) => {
    const id = req.headers.author;

    const token = req.headers.token;

    console.log(id)

    jwt.verify(token, config.SECRET_KEY, async (err, decoded) => {
        const userId = decoded.userId;

        if(userId === id) {
            try {
                const check = await findPostSchema.validateAsync(req.params);
        
                if(check) {
                    const post = await Post.findOne({ _id: check._id, author: id }).exec();
        
                    if(post) {
                        return await res.status(200).json({
                            success: true,
                            content: post
                        });
                    }
                }
        
            } catch(error) {
                res.status(404).json({
                    success: false,
                    content: 'Post not found!'
                })
            }
        } else {
            res.status(401).send('Not authorized!');
        }

    })
}

exports.post_create = async (req, res) => {
    const id = req.body.author;

    const token = req.headers.token;

    jwt.verify(token, config.SECRET_KEY, async (err, decoded) => {

        const userId = decoded.userId;

        if(userId === id) {
            try {
                const result = await postSchema.validateAsync(req.body);
                
                const post = new Post({
                    _id: new mongoose.Types.ObjectId(),
                    title: result.title,
                    slug: result.slug,
                    content: result.content,
                    author: result.author,
                });

                post.save( (err) => {
                    if(err) {
                        return res.status(400).json({
                            success: false,
                            content: err.errmsg
                        })
                    }

                    res.status(200).json({
                        success: true,
                        content: 'New post created'
                    })
                })
            } catch(error) {
                res.status(400).send(error);
            }
        } else {
            res.status(401).send('Not authorized!');
        }
    })
}

exports.post_remove = async (req, res) => {
    try {
        // FIND POSTS
        const result = await findPostSchema.validateAsync(req.body);

        const post = await Post.findOne({ _id: result._id });

        if(post) {
            // DELETE THE POSTS IF FOUND
            await Post.deleteOne({ _id: result._id });
            
            return await res.status(200).json({
                success: true,
                content: `${ result._id } has been deleted!`
            })
        }

        return await res.status(404).json({
            success: false,
            content: 'Cant find the post'
        })
    } catch(error) {
        res.status(400).json({
            success: false,
            content: `Something is wrong please try again later! ${error}`
        })
    }
}

exports.post_update = async (req, res) => {
    // FIND POST
    const _id = req.params._id;

    const { name } = req.body;

    const post = await Post.findOne({ _id: _id });

    if(!post) {
        return console.log('post not found!');
    }
    
    // UPDATE
    console.log(`found post`, name, _id);

}