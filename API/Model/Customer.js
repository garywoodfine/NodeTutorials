
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Customer = new Schema({
    firstname: {type:String},
    lastname:{type:String},
    address:[Address]

});