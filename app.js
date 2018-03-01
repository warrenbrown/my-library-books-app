const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const booksController = require('./controllers/booksController');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});


app.listen(3002, function() {
  console.log('App is now runnnig on localhost:3002 contrl c to exit');
});

//fire up the books controller
booksController(app);
