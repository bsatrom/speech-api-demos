
/*
 * GET new user.
 */

exports.new = function(req, res){
  res.render('speaker', { title: 'Add a Speaker' });
};