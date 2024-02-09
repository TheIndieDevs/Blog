const mongoose = require('mongoose');
const config = require('../configs/mongo.config.js');

const connectDB = async () => {
    try {
      
      await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'BlogV2',
      });
      
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
module.exports = connectDB;