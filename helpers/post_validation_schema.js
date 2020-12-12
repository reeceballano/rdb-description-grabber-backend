const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string()
            .min(3)
            .required(),
    
    slug: Joi.string()
                .min(3)
                .required(),

    content: Joi.string(),

    author: Joi.string()
})

const findPostSchema = Joi.object({
    _id: Joi.string().min(10).required()
})

module.exports = {
    postSchema,
    findPostSchema
}