
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 44221);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.locals({ pretty: true });
  app.enable('strict routing');
  app.use(express.compress());
  app.use(express.favicon(__dirname + '/public/img/favicon.png'));
  //app.use(express.logger('dev'));
  //app.use(express.bodyParser());
  //app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/blog', express.static(path.join(__dirname, 'public')));
  app.use(function(req, res, next){
    res.send(404, 'Page not found!');
  });
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.locals.origin = 'http://www.mailvelope.com';

app.get('/', routes.home);
app.get('/help', routes.help);
app.get('/help-body', routes.help);
app.get('/about', routes.about);
app.get('/about-body', routes.about);
app.get('/faq', routes.faq);
app.get('/blog', routes.blog);
app.get('/blog/:post', routes.blog);
app.get('/contribute', routes.contribute);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
