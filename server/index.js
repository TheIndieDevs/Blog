
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const PORT = process.env.port || 3000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.use( '/', (req, res)=>{
    res.send('backend opened');
});

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
})


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})