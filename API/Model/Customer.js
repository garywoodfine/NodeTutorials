
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    firstname: {type:String},
    lastname:{type:String},
    address: [Address]

});

mongoose.model('Customer', CustomerSchema);