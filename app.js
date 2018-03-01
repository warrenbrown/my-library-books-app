const express = require('express');
const app = express();
require('ejs');
app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});


app.listen(3002, function() {
  console.log('App is now runnnig on localhost:3002 contrl c to exit');
});
