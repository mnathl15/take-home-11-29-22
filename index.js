const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000;
const POSTS = 'https://jsonplaceholder.typicode.com/posts'
const request = require('request');

app.get('/getPosts', (req, res) => {
    request(POSTS, (error, response, body) => {
        res.send(body)
    });
});

app.get('/', (req, res) => {
    res.send('hi')
});

app.listen(PORT, () => console.log(`Server running on port${PORT}`))