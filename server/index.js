
const express = require('express');

const dotenv = require('dotenv');

const PORT = process.env.port || 3000;

dotenv.config();

express().use(cors());
express().use(express.json());

express().use((req, res, next) => {
    res.status(404).send('Page Not Found');
})


express().listen(PORT, ()=> {
    console.log(`Server is running on http://localhost${PORT}`)
})