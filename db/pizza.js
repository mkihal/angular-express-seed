var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
// ERROR CHECK
db.on('error', console.error.bind(console, ':error connection '));

var pizzaSchema = mongoose.Schema({
   name : 'String',
   image : 'String',
   ingredients : 'Array',
   price : 'Number',
   base : 'Boolean'
});


var pizza = mongoose.model('pizza', pizzaSchema);
module.exports = pizza;