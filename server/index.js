const connectDB = require('./src/services/mongo.js');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.port || 3000;
const app = require('./app.js');


connectDB();

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})