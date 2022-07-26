const express = require('express');
const fs = require("fs");
const routesWeb = express();

routesWeb.get('/app', function (req, res) {
    res.setHeader('Content-Type', 'text/HTML');
    fs.readFile(__dirname + '/../public/index.html', "utf8", function (err, readData) {
        if (err) {
            console.log(err);
        } else {
            res.send(readData);
        }
    });
});

module.exports = {routesWeb};
