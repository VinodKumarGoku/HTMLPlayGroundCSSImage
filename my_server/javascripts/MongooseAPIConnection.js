var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var mongoosedb = mongoose.connection;
mongoosedb.on('error', console.error.bind(console, 'connection error:'));
mongoosedb.once('open', function() {
  // we're connected!
});

var kittySchema = new mongoose.Schema({
    name: String
  });

var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = {

createenrty_picture: function(image_location) {    
    var silence = new Kitten({ name: image_location });
    console.log(silence.name); // 'Silence'
    
    silence.save();
}

}