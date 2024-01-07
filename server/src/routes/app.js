
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use( '/', (req, res)=>{
    res.send('backend opened');
});

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
})

module.exports = app;