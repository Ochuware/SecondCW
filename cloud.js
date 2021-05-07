var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('You just sent a GET request');
});

app.post('/', function(req, res) {
    res.send('You just sent a POST request');
});

app.put('/', function(req, res) {
    res.send('Yiu just sent a PUT request');
});

app.delete('/', function(req, res) {
    res.send('You justs ent a DELETE request');
});

app.listen(1000, function(){
    console.log('CRUD api is running on port 1000')
});