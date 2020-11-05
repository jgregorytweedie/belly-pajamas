const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){


});

app.get('/features', function(request, response){


});

app.get('/shop', function(request, response){


});

app.get('/contact', function(request, response){


});

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});