const mongoose   = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { 
        type: String, 
        min: 3 
    },
    slug: {
        type: String,
        unique: true
    },
    content: {
        type: String,
    },
    author: {
        type: String
    },
    // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Post', postSchema);