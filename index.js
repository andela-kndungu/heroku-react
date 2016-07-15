var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var mongoose = require('mongoose');

var mongodbUri = process.env.MONGODB_URI;
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/times', function(request, response) {
  var result = '';
  times = process.env.TIMES || 5;
  for (var i = 0; i < times; i++) {
    result += i + ' ';
  }

  response.send(result);
});

app.get('/db', function (request, response) {
  console.log(process.env);
  mongoose.connect(mongodbUri);
  var dbConnection = mongoose.connection;
  dbConnection.once('open', function() {
    response.send('It works');
  });
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


