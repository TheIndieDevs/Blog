const mongoose = require('mongoose');
const config = require('../configs/mongo.config.js');

const connectDB = async () => {
    try {
      await mongoose.connect(config.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
module.exports = connectDB;