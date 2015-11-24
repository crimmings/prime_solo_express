var express = require("express");
var app = express();
var combine = require('./modules/combine.js');
var convert = require('./modules/convert.js');
var random = require('./modules/random.js');
var path = require('path');

// always use__dirname plus the directory
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res, next) {
res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/balance', function(req, res, next){
res.send(combine.accountBalance() + ""  + combine.combine(100,1000000));
});

// this actually starts our server!
  var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
