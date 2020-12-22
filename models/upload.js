const mongoose   = require('mongoose');

const uploadSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { 
        type: String, 
        min: 3 
    },
    post_id: {
        type: String,
    },
    url: {
        type: String,
    },
    author: {
        type: String
    },
    // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Upload', uploadSchema);