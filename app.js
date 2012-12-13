
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , speaker = require('./routes/speaker')
  , http = require('http')
  , path = require('path')
  , engine = require('ejs-locals');

var app = express();

app.engine('ejs', engine);

app.configure(function(){
  app.set('port', process.env.PORT || 30001);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/buzz', routes.buzz);
app.get('/speakers', speaker.new);
app.get('/speakers/new', speaker.new);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.locals({
  renderScriptsTags: function (all) {
    if (all != undefined) {
      return all.map(function(script) {
        return '<script src="/javascripts/' + script + '"></script>';
      }).join('\n ');
    }
    else {
      return '';
    }
  }
});

app.use(function(req, res, next) {
  res.locals.scripts = ['jquery.min.js', 'kendo.all.min.js'];
  next();
});