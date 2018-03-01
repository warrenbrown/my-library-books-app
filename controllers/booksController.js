module.exports = function(app) {
  app.get('/books', function(req, res){
    res.render('books');
  });
}
