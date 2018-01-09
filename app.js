var express = require('express');
var app = express();
var port = 2100;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(port, function(req, res){
    console.log('Listening on port: ' + port);
});