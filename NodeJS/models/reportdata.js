const mongoose = require('mongoose');

var Reportdata = mongoose.model('Reportdata',{
    title : {type : String},
    description : { type: String},
    image:{ type:String }
});

module.exports = { Reportdata };