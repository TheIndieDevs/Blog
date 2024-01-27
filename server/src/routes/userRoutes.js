const express = require('express');
const Router = express.Router();
const userControllers = require('../controllers/userControllers')

Router.post('/create', userControllers.createUser);
Router.all('/read', userControllers.readUser);
Router.put('/update', userControllers.updateUser);
Router.delete('/delete', userControllers.deleteUser);


module.exports = Router;