const express = require('express');
const app = express();
const gifs = require('./gifs');
const cors = require('cors');

app.use(cors());
app.listen(5000, function () {
    console.log('the TRUMP is running on 5000');
});

app.get('/', function (req, res) {
    let random = Math.floor(Math.random() * gifs.length)
    res.send(gifs[random]);
});