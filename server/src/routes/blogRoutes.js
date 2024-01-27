const express = require('express');
const Router = express.Router();
const blogController = require('../controllers/blogControllers')

Router.post('/create', blogController.createBlog);
Router.all('/read', blogController.readBlog);
Router.put('/update', blogController.updateBlog);
Router.delete('/delete', blogController.deleteBlog);


module.exports = Router;