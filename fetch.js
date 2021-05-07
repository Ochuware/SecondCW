var express = require("express");
var app = express();
var path = require("path");

//Routes
app.get("/olivia", function(req, res) {
    res.send("Welcome to Olvia's homepage!");
});

app.get("/users/:userid", function(req, res) {
    res.send("The user id is: " +req.params.userid)
});

app.get('/search', function(req, res) {
    res.send("The query string is: " + req.query.text)
});


var apiRouter = require('./routes/api_routes');
app.use('/api', apiRouter);

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

var imagePath = path.resolve(__dirname, "images");
app.use("/image", express.static(imagePath));

app.use(function(req, res) {
    res.status(404).send("Page not found!");
});

app.listen(2000);