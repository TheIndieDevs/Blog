
const express = require('express');
const cors = require('cors');

const app = express();

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('backend opened');
});

app.get('/stream', (req, res) => {
    console.log("data requested.")
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    console.log("posting data")
    res.write(`data: ${JSON.stringify(featuredPosts)} \n\n`);
    req.on('close', () => {
        res.end();
    })
})


app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
})

module.exports = app;