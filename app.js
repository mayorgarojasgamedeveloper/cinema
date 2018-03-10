const express = require('express');
const app = express();

// Global
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// routing
app.get('/', function(req, res) {
  res.render('home');
});

app.get('*', function(req, res) {
  res.render('404');
});

app.listen(3000);
console.log('Server started');
