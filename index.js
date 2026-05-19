var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', function (req, res) {
  res.render('home');
});
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});