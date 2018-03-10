const express = require('express');
const app = express();

// Global
app.set('view engine', 'ejs');

// routing
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/views/contact.html');
});

app.get('/profile/:user', function(req, res) {
  res.render('profile', {person: req.params.user});
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/views/404.html');
});

app.listen(3000);
console.log('Server started');
