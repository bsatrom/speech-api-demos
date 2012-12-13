
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Faceplant - Social Speaking' });
};

exports.buzz = function(req, res){
  res.render('buzz', { title: 'Faceplant - The Buzz' });
};