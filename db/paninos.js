var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
// ERROR CHECK
db.on('error',console.error.bind(console, ':error connection'));

var paniniSchema = mongoose.Schema({
   name: 'String',
   image: 'String',
   price: 'Number'
});

var panini = mongoose.model('panini', paniniSchema);

module.exports = panini;

