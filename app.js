//Express
const express = require('./controller/express');
const mtmApp = express.app;

const port = 8080;

mtmApp.listen(port, function () {
    console.log("Listening on port - " + port);
});

module.exports = mtmApp;
