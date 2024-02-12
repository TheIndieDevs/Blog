
const express = require('express');
const cors = require('cors');
const blogRoutes = require('./src/routes/blogRoutes')
const userRoutes = require('./src/routes/userRoutes')
const authRoutes = require('./src/routes/authRoutes')
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

app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


app.get('/stream', (req, res) => {
    console.log("data requested.")
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    console.log("posting data")
    res.write(`data: ${JSON.stringify(featuredPosts)} \n\n`);
    res.write(`data: somethingelse`);
    req.on('close', () => {
        res.end();
    })
})




app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
})

module.exports = app;