const mongoose = require('mongoose');

var sales = mongoose.model('sales',{
    month : {type : String},
    number_of_orders : { type :Number},
    state_of_order : { type :Number },
    payment_status : {type :Number},
    amount : {type : Number},
    image : {type : String}
});

module.exports = { sales };