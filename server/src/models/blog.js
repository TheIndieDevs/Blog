const {Schema, model: Model} = require('mongoose');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    dateCreated: {
        type: Date,
        require: true
    },
    dateModified: {
        type: Date,
        requiredd: true
    },
    comments: [
        {
            author: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            content: {
                type: String,
                required: true
            },
            dateCreated: {
                type: Date,
                required: true
            },
            dateModified: {
                type: Date,
                required: true
            }
        }
    ]
})

const Blog = new Model('Blog', blogSchema);

module.exports = Blog;