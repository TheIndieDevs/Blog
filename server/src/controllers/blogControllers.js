const Blog = require('../models/blog');
const Blog = require('../models/blog');

exports.createBlog = async (req, res) => {
    try{
        const {title, content, author, dateCreated, dateModified, comments} = req.body;

        let blog = new Blog({
            title,
            content,
            author,
            dateCreated: dateModified || new Date(),
            dateModified: dateCreated || dateModified,
            comments
        })
        await blog.save();
        res.status(201).json({message: "blog created"});

    }catch(error){
        res.status(500).json({message: "blog not created"})
    }
}

exports.updateBlog = async (req, res) => {

}

exports.readBlog = async (req, res) => {

}

exports.deleteBlog = async(req, res) => {
    
}