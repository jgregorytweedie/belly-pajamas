const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  // Tony
  response.render('pages/index',
    {
      title: "Belly Pajamas", 
      tagline: "Midriff PJs for the Aging Gentleman"
    })
});

app.get('/features', function(request, response){
  // Jina

});

app.get('/shop', function(request, response){
  // Jayden

});

app.get('/contact', function(request, response){
  // Patrick

});

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});