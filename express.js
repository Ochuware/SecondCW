const express = require("express");
const http = require('http');

const app = express();

app.use(function(req, res){
    console.log("In comes a requeest to: " + req.url);
    res.end("Hello from the Express.js Server");
});

http.createServer(app).listen(3000);