
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// MONGOOSE CONNECTION 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
// MONGOOSE ERROR CHECK
db.on('error', console.error.bind(console, ':connection error'));
db.once('open', function callback(){
     var kittySchema = mongoose.Schema({
         name: 'String'
     });
     // compiling the schema into a model
     var kitty = mongoose.model('kitty', kittySchema);
     var minou = new kitty({name:'minou'});
    console.log(minou.name+' said: the connection to the database is working like a charm chief :) ');
    // Creating a method to our schema 'kittySchema'
});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
