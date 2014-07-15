var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

// MONGOOSE ERROR CHECK
db.on('error', console.error.bind(console, ':connection error'));

var kittySchema = mongoose.Schema({
        name: 'String'
});
// compiling the schema into a model
var kitty = mongoose.model('kitty', kittySchema);

module.exports = kitty;
// watch this on git man, check it