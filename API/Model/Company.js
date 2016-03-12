var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompanySchema =  new Schema({
    name : {type:String},
    registrationNumber : {type:String}

});

mongoose.model('Company', CompanySchema);