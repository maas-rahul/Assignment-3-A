const mongoose = require('mongoose');

var market = mongoose.model('market',{
    customer_id : {type : Number},
    item : { type :Number},
    month : { type :String }
});

module.exports = { market };