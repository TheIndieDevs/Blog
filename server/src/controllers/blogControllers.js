const Blog = require('../models/blog');

exports.createBlog = async (req, res) => {
    try{
        const {title, content, author, dateCreated, dateModified, comments} = req.body;
        console.log('creating blog')
        let blog = new Blog({
            title,
            content,
            author,
            dateCreated: dateCreated || new Date(),
            dateModified: dateCreated || new Date(),
            comments
        })
        await blog.save();
        res.status(201).json({message: "Blog successfully created"});

    }catch(error){
        res.status(500).json({message: "Blog not created", err: error})
    }
}

exports.updateBlog = async (req, res) => {

}

exports.readBlog = async (req, res) => {
    const blogQuery = {};
    console.log("Requesting: " , {author: req.query.author, title: req.query.title})
    if (req.query.title) {
        blogQuery.title = { $regex: req.query.title, $options: 'i' };
    }

    if (req.query.author) {
        blogQuery.author = { $regex: req.query.author, $options: 'i' };
    }

    try{
        const blog = await Blog.find(blogQuery);
        res.status(200).json({message: "Blog read", blogs: blog})
    }catch(error){
        res.status(500).json({message: "Blog not read", err: error})
    }
}


exports.deleteBlog = async(req, res) => {
    
}