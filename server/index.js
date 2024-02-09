
const app = require('./app.js');
const connectDB = require('./src/services/mongo.js');
const dotenv = require('dotenv');
const PORT = process.env.port || 3000;

dotenv.config();

connectDB();

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})