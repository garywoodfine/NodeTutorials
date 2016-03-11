var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Company =  new Schema({
    name : {type:String},
    registrationNumber : {type:String}

});