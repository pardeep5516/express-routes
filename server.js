
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("hello");
});

app.get('/contact', function (req, res) {
    res.send("pradeep@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("i'm a web developer");
});

app.get('/hobbies', function (req, res) {
    res.send("movie and programming");
});

app.listen(3000, function () {
    console.log('server running on port 3000')
});