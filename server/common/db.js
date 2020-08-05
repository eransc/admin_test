'use strict';
require("dotenv").config();
var mongoose = require('mongoose');

//mongoose.set('debug', true);
var mongooseOptions = { useNewUrlParser: true, server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } } };
//     replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongoURI = process.env["db"];
var db = mongoose.connection;

db.once("open", function (ref) {
    console.log("Connected to mongo server.");

});

db.on("error", function (err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});

exports.connect = function () {
    console.log(mongoURI);
    mongoose.connect(mongoURI, mongooseOptions);
};
