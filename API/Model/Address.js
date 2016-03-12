var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddressSchema = new Schema({
     address1:{type:String},
    address2:{type:String},
    address3:{type:String},
    city:{type:String},
    country:{type:String},
    postalCode:{type:String}


});


mongoose.model('Address', AddressSchema);
