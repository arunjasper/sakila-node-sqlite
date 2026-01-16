/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require('./src/routes/router');
/* Database configuration */
//const database = require('./src/config/dbconfig');

/* Init database */
//database.init();

/* Init server listening */
const port = process.argv[2] || 2400;
/*
app.listen(port, function () {
    console.log("Server listening on port : " + port);
}); */

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
app.use(router);

module.exports = app;