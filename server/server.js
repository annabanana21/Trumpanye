const express = require('express');
const app = express();
const gifs = require('./gifs');

app.listen(5000, function () {
    console.log('the TRUMP is running');
});

app.get('/', function (req, res) {
    let random = Math.floor(Math.random() * gifs.length)
    res.send(gifs[random]);
});